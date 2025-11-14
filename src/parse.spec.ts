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
  const { parse } = parseLibrary(new Date().toISOString());

  it('will handle standard USD amounts', () => {
    assert.deepEqual(parse('0', 'USD'), {
      amount: 0n,
      currency: 'USD',
    });
    assert.deepEqual(parse('-0', 'USD'), {
      amount: 0n,
      currency: 'USD',
    });
    assert.deepEqual(parse('0.01', 'USD'), {
      amount: 1n,
      currency: 'USD',
    });
    assert.deepEqual(parse('-0.01', 'USD'), {
      amount: -1n,
      currency: 'USD',
    });
    assert.deepEqual(parse('-1.2', 'USD'), {
      amount: -120n,
      currency: 'USD',
    });
    assert.deepEqual(parse('1', 'USD'), {
      amount: 100n,
      currency: 'USD',
    });
    assert.deepEqual(parse('-$1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parse('$1.23', 'USD'), {
      amount: 123n,
      currency: 'USD',
    });
    assert.deepEqual(parse('-USD$1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parse('$-1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parse('US Dollar $-1.23', 'USD'), {
      amount: -123n,
      currency: 'USD',
    });
    assert.deepEqual(parse('US Dollar $123456', 'USD'), {
      amount: 12_345_600n,
      currency: 'USD',
    });
    assert.deepEqual(parse('usd$123456.', 'USD'), {
      amount: 12_345_600n,
      currency: 'USD',
    });
    assert.deepEqual(parse('US$123456.7', 'USD'), {
      amount: 12_345_670n,
      currency: 'USD',
    });
    assert.deepEqual(parse('USA $123,456.78', 'USD'), {
      amount: 12_345_678n,
      currency: 'USD',
    });
    assert.throws(() => parse('America $123,456.78', 'USD'), {
      message: 'Cannot parse "America $123,456.78"',
    });
  });

  it('will handle non-USD amounts', () => {
    assert.throws(() => parse('123456.789', 'USD'), {
      message: 'decimalPlaces > minorUnitDigits',
    });
    assert.deepEqual(parse('€123.456,78', 'EUR', 'de-DE'), {
      amount: 12_345_678n,
      currency: 'EUR',
    });
    assert.deepEqual(parse('10€', 'EUR'), {
      amount: 1000n,
      currency: 'EUR',
    });
    assert.deepEqual(parse('10', 'JPY'), {
      amount: 10n,
      currency: 'JPY',
    });
    assert.deepEqual(parse('10', 'TRY'), {
      amount: 1000n,
      currency: 'TRY',
    });
    assert.deepEqual(parse('TRY 1,010.00', 'TRY'), {
      amount: 101_000n,
      currency: 'TRY',
    });
    assert.throws(() => parse('₺1010.00', 'TRY'), {
      message: 'Cannot parse "₺1010.00"',
    });
    assert.deepEqual(parse('₺1010,00', 'TRY', 'tr-TR'), {
      amount: 101_000n,
      currency: 'TRY',
    });
  });
});
