// parse.spec.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import parseLibrary from './index.ts';

describe('parse', () => {
  const at = new Date().toISOString();

  it('will handle standard USD amounts', () => {
    assert.deepEqual(parseLibrary(at).parse('0', 'USD'), {
      amount: 0n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('-0', 'USD'), {
      amount: 0n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('0.01', 'USD'), {
      amount: 1n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('-0.01', 'USD'), {
      amount: -1n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('-1.2', 'USD'), {
      amount: -120n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('1', 'USD'), {
      amount: 100n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('-$1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('$1.23', 'USD'), {
      amount: 123n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('-USD$1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('$-1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('USD$-1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('US$123456', 'USD'), {
      amount: 12_345_600n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('US$123456.', 'USD'), {
      amount: 12_345_600n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('US$123456.7', 'USD'), {
      amount: 12_345_670n,
      currency: 'USD',
    });
    assert.deepEqual(parseLibrary(at).parse('US$123,456.78', 'USD'), {
      amount: 12_345_678n,
      currency: 'USD',
    });
  });

  it('will handle non-USD amounts', () => {
    assert.throws(() => parseLibrary(at).parse('123456.789', 'USD'), {
      message: 'decimalPlaces > minorUnitDigits',
    });
    assert.deepEqual(parseLibrary(at).parse('€123.456,78', 'EUR', 'de-DE'), {
      amount: 12_345_678n,
      currency: 'EUR',
    });
    assert.deepEqual(parseLibrary(at).parse('10€', 'EUR'), {
      amount: 1000n,
      currency: 'EUR',
    });
    assert.deepEqual(parseLibrary(at).parse('10', 'JPY'), {
      amount: 10n,
      currency: 'JPY',
    });
  });
});
