// country.spec.ts

import * as assert from 'assert';

import { allCountries } from './index';

describe('country', () => {
  it('getAll returns all countries', () => {
    assert.strictEqual(allCountries().length, 245);
  });
});
