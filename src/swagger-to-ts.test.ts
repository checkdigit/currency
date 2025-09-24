// swagger-to-ts.test.ts

import { promises as fs } from 'node:fs';

import dtsgen, { type Options as DtsgenOptions, type JsonSchema, parseSchema } from 'dtsgenerator';
import yaml from 'js-yaml';

const dtsgenFunction =
  typeof dtsgen === 'function'
    ? dtsgen
    : // @ts-expect-error, due to the possible package bundling issue of 3rd party library, we need to use the default export inside the default export
      (dtsgen.default as (options: DtsgenOptions) => Promise<string>);

function extractTypes(swaggerSchema: string): string {
  const namespaceWrapperEndingIndex = `declare namespace Components {
    namespace Schemas {`.length;
  const sampleModelBeginningIndex = swaggerSchema.indexOf('export interface SampleModel');

  return swaggerSchema.slice(namespaceWrapperEndingIndex, sampleModelBeginningIndex);
}

async function generateTypesFromSwagger() {
  const swaggerContents = await fs.readFile('./src/swagger.yml', 'utf8');

  const swaggerYaml = yaml.load(swaggerContents);
  const swaggerSchema = await dtsgenFunction({
    contents: [parseSchema(swaggerYaml as JsonSchema)],
  });

  const types = extractTypes(swaggerSchema);
  await fs.writeFile('./src/swagger.ts', types, 'utf8');
}

await generateTypesFromSwagger();
