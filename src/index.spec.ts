// index.spec.ts

import * as assert from 'assert';

import currency from './index';

describe('currency', () => {
  it('works', () => {
    assert.strictEqual(currency(), false);
  });
});
