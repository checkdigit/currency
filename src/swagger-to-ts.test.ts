// swagger-to-ts.test.ts

import { promises as fs } from 'node:fs';
import { strict as assert } from 'node:assert';

import dtsgen, { type Options as DtsgenOptions, type JsonSchema, parseSchema } from 'dtsgenerator';
import yaml from 'js-yaml';

const dtsgenFunction =
  typeof dtsgen === 'function'
    ? dtsgen
    : // @ts-expect-error, due to the possible package bundling issue of 3rd party library, we need to use the default export inside the default export
      (dtsgen.default as (options: DtsgenOptions) => Promise<string>);

function extractTypes(swaggerSchema: string): string {
  const regex =
    // Use a regular expression to extract the content between the namespace wrapper and TypeReferenceModel interface
    // eslint-disable-next-line sonarjs/slow-regex
    /declare\s*namespace\s*Components\s*\{\s*namespace\s*Schemas\s*\{(?<types>[\s\S]*)\s*export\s*interface\s*TypeReferenceModel/u;
  const match = swaggerSchema.match(regex);
  assert.ok(match?.[1], 'Failed to extract types from the generated schema.');
  return match[1].trim();
}

async function generateTypesFromSwagger() {
  const [_node, _file, inputSwaggerYamlPath, outputTypesPath] = process.argv;
  assert.ok(inputSwaggerYamlPath !== undefined && outputTypesPath !== undefined, 'Input and output paths must be provided as command line arguments.');

  const swaggerContents = await fs.readFile(inputSwaggerYamlPath, 'utf8');
  const swaggerYaml = yaml.load(swaggerContents);
  const swaggerSchema = await dtsgenFunction({
    contents: [parseSchema(swaggerYaml as JsonSchema)],
  });

  const types = extractTypes(swaggerSchema);
  await fs.writeFile(outputTypesPath, types, 'utf8');
}

await generateTypesFromSwagger();
