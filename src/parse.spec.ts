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
    assert.deepEqual(parse('USD $123,456.78', 'USD'), {
      amount: 12_345_678n,
      currency: 'USD',
    });
    assert.deepEqual(
      parse(
        '314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706.79',
        'USD',
      ),
      {
        amount:
          31_415_926_535_897_932_384_626_433_832_795_028_841_971_693_993_751_058_209_749_445_923_078_164_062_862_089_986_280_348_253_421_170_679n,
        currency: 'USD',
      },
    );
    assert.throws(() => parse('USA $123,456.78', 'USD'), {
      message: 'Cannot parse "USA $123,456.78"',
    });
    assert.throws(() => parse('America $123,456.78', 'USD'), {
      message: 'Cannot parse "America $123,456.78"',
    });
  });

  it('will handle non-USD amounts', () => {
    assert.throws(() => parse('123456.789', 'USD'), {
      message: 'Too many decimal places (3 - maximum 2), in "123456.789"',
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
    assert.deepEqual(parse('₺1010.00', 'TRY'), {
      amount: 101_000n,
      currency: 'TRY',
    });
    assert.deepEqual(parse('₺1010,00', 'TRY', 'tr-TR'), {
      amount: 101_000n,
      currency: 'TRY',
    });
    assert.deepEqual(parse('$1.23', 'NZD'), {
      amount: 123n,
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZ$1.23', 'NZD', 'en-NZ'), {
      amount: 123n,
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZ$1.23', 'NZD'), {
      amount: 123n,
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZD$1.23', 'NZD', 'en-NZ'), {
      amount: 123n,
      currency: 'NZD',
    });
    assert.throws(() => parse('NZL$1.23', 'NZD'), {
      message: 'Cannot parse "NZL$1.23"',
    });
  });
});
