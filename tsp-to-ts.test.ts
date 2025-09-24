// tsp-to-ts.test.ts

import { promises as fs } from 'node:fs';
import { strict as assert } from 'node:assert';

import { compile, logDiagnostics, NodeHost, type Program } from '@typespec/compiler';
import dtsgen, { type Options as DtsgenOptions, type JsonSchema, parseSchema } from 'dtsgenerator';
import yaml from 'js-yaml';

const NAMESPACE = 'Currency';

const DEFAULT_INPUT_TSP_PATH = './src/index.tsp';
const GENERATED_DIR = './generated';
const GENERATED_SERVICE_TSP_PATH = `${GENERATED_DIR}/service.tsp`;
const GENERATED_SWAGGER_FILENAME = 'swagger.yml';
const DEFAULT_OUTPUT_TYPES_PATH = './src/swagger.ts';

const dtsgenFunction =
  typeof dtsgen === 'function'
    ? dtsgen
    : // @ts-expect-error, due to the possible package bundling issue of 3rd party library, we need to use the default export inside the default export
      (dtsgen.default as (options: DtsgenOptions) => Promise<string>);

async function compileTsp(inputTspPath: string) {
  const program = await compile(NodeHost, inputTspPath);
  // Print any diagnostics just like the CLI does
  if (program.diagnostics.length > 0) {
    logDiagnostics(program.diagnostics, NodeHost.logSink);
    throw new Error('Typespec compilation failed');
  }
  return program;
}

async function generateServiceTsp(program: Program) {
  const enumReferences = [...program.getGlobalNamespaceType().enums.keys()]
    .map((enumName) => `  ${enumName}: ${enumName};`)
    .join('\n');

  const serviceTspContent = `import "@typespec/http";
import "../src/index.tsp";

using Http;

@service
@server("/")
namespace ${NAMESPACE};

// this model must be presented and declare properties from imported models to ensure they are included in the generated OpenAPI spec.
model TypeReferenceModel {
${enumReferences}
}
`;
  await fs.writeFile(GENERATED_SERVICE_TSP_PATH, serviceTspContent, 'utf8');
}

async function compileServiceTspAndGenerateSwagger() {
  const emit = ['@typespec/openapi3'];
  const options = {
    '@typespec/openapi3': {
      'emitter-output-dir': GENERATED_DIR,
      'output-file': GENERATED_SWAGGER_FILENAME,
    },
  };
  await compile(NodeHost, GENERATED_SERVICE_TSP_PATH, { emit, options });
}

function extractTypes(swaggerSchema: string): string {
  const regex =
    // Use a regular expression to extract the content between the namespace wrapper and TypeReferenceModel interface
    // eslint-disable-next-line sonarjs/slow-regex
    /declare\s*namespace\s*Components\s*\{\s*namespace\s*Schemas\s*\{(?<types>[\s\S]*)\s*export\s*interface\s*TypeReferenceModel/u;
  const match = swaggerSchema.match(regex);
  assert.ok(match?.groups?.['types'], 'Failed to extract types from the generated schema.');
  return match.groups['types'].trim();
}

async function generateTypesFromSwagger(outputTypesPath: string) {
  const swaggerContents = await fs.readFile(`${GENERATED_DIR}/${GENERATED_SWAGGER_FILENAME}`, 'utf8');
  const swaggerYaml = yaml.load(swaggerContents);
  const swaggerSchema = await dtsgenFunction({
    contents: [parseSchema(swaggerYaml as JsonSchema)],
  });

  const types = extractTypes(swaggerSchema);
  await fs.writeFile(outputTypesPath, types, 'utf8');
}

async function main() {
  const inputTspPath = process.argv[2] ?? DEFAULT_INPUT_TSP_PATH;
  const outputTypesPath = process.argv[3] ?? DEFAULT_OUTPUT_TYPES_PATH;

  // prepare the generated directory
  await fs.rm(GENERATED_DIR, { recursive: true, force: true });
  await fs.mkdir(GENERATED_DIR, { recursive: true });

  const program = await compileTsp(inputTspPath);
  await generateServiceTsp(program);
  await compileServiceTspAndGenerateSwagger();
  await generateTypesFromSwagger(outputTypesPath);
}

await main();
