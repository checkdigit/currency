// parse.spec.ts

/*
 * Copyright (c) 2021-2026 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import currencyLibrary from './index.ts';
import { getFewLocales, getManyLocales } from './locales.test.ts';
import { getFewCurrencies, getManyCurrencies } from './currencies.test.ts';

describe('parse', () => {
  const at = new Date().toISOString();
  const { format, parse } = currencyLibrary(at);

  it('will handle standard USD amounts', () => {
    assert.deepEqual(parse('0', 'USD'), {
      amount: '0',
      currency: 'USD',
    });
    assert.deepEqual(parse('-0', 'USD'), {
      amount: '-0',
      currency: 'USD',
    });
    assert.deepEqual(parse('0.01', 'USD'), {
      amount: '1',
      currency: 'USD',
    });
    assert.deepEqual(parse('-0.01', 'USD'), {
      amount: '-1',
      currency: 'USD',
    });
    assert.deepEqual(parse('-1.2', 'USD'), {
      amount: '-120',
      currency: 'USD',
    });
    assert.deepEqual(parse('1', 'USD'), {
      amount: '100',
      currency: 'USD',
    });
    assert.deepEqual(parse('-$1.23', 'USD'), {
      amount: '-123',
      currency: 'USD',
    });
    assert.deepEqual(parse('$1.23', 'USD'), {
      amount: '123',
      currency: 'USD',
    });
    assert.deepEqual(parse('-USD$1.23', 'USD'), {
      amount: '-123',
      currency: 'USD',
    });
    assert.deepEqual(parse('$-1.23', 'USD'), {
      amount: '-123',
      currency: 'USD',
    });
    assert.deepEqual(parse('US Dollar $-1.23', 'USD'), {
      amount: '-123',
      currency: 'USD',
    });
    assert.deepEqual(parse('US Dollar $123456', 'USD'), {
      amount: '12345600',
      currency: 'USD',
    });
    assert.deepEqual(parse('usd$123456.', 'USD'), {
      amount: '12345600',
      currency: 'USD',
    });
    assert.deepEqual(parse('US$123456.7', 'USD'), {
      amount: '12345670',
      currency: 'USD',
    });
    assert.deepEqual(parse('USD $123,456.78', 'USD'), {
      amount: '12345678',
      currency: 'USD',
    });
    assert.deepEqual(
      parse(
        '314159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706.79',
        'USD',
      ),
      {
        amount:
          '31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679',
        currency: 'USD',
      },
    );
    assert.deepEqual(parse('USA $123,456.78', 'USD'), {
      amount: '12345678',
      currency: 'USD',
    });
    assert.deepEqual(parse('America $123,456.78', 'USD'), {
      amount: '12345678',
      currency: 'USD',
    });
  });

  it('will handle non-USD amounts', () => {
    assert.throws(() => parse('', 'USD'), {
      message: 'Cannot parse ""',
    });
    assert.throws(() => parse(' ', 'USD'), {
      message: 'Cannot parse " "',
    });
    assert.throws(() => parse('-', 'USD'), {
      message: 'Cannot parse "-"',
    });
    assert.throws(() => parse('.', 'USD'), {
      message: 'Cannot parse "."',
    });
    assert.throws(() => parse('-$.', 'USD'), {
      message: 'Cannot parse "-$."',
    });
    assert.throws(() => parse('123456.789', 'USD'), {
      message: 'Too many decimal places (3 - maximum 2), in "123456.789"',
    });
    assert.deepEqual(parse('€123.456,78', 'EUR', 'de-DE'), {
      amount: '12345678',
      currency: 'EUR',
    });
    assert.deepEqual(parse('10€', 'EUR'), {
      amount: '1000',
      currency: 'EUR',
    });
    assert.deepEqual(parse('10', 'JPY'), {
      amount: '10',
      currency: 'JPY',
    });
    assert.deepEqual(parse('10', 'TRY'), {
      amount: '1000',
      currency: 'TRY',
    });
    assert.deepEqual(parse('TRY 1,010.00', 'TRY'), {
      amount: '101000',
      currency: 'TRY',
    });
    assert.deepEqual(parse('₺1010.00', 'TRY'), {
      amount: '101000',
      currency: 'TRY',
    });
    assert.deepEqual(parse('₺1010,00', 'TRY', 'tr-TR'), {
      amount: '101000',
      currency: 'TRY',
    });
    assert.deepEqual(parse('$1.23', 'NZD'), {
      amount: '123',
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZ$1.23', 'NZD', 'en-NZ'), {
      amount: '123',
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZ$1.23', 'NZD'), {
      amount: '123',
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZD$1.23', 'NZD', 'en-NZ'), {
      amount: '123',
      currency: 'NZD',
    });
    assert.deepEqual(parse('NZL$1.23', 'NZD', 'en-NZ'), {
      amount: '123',
      currency: 'NZD',
    });
  });

  it('uses ISO 4217 fraction digits when Intl defaults differ', () => {
    for (const [currency, formatted] of [
      ['COP', 'COP\u{A0}1.234,56'],
      ['HUF', 'HUF\u{A0}1.234,56'],
      ['IDR', 'IDR\u{A0}1.234,56'],
      ['PKR', 'PKR\u{A0}1.234,56'],
      ['IQD', 'IQD\u{A0}123,456'],
    ] as const) {
      assert.deepEqual(parse(formatted, currency, 'de-DE'), {
        amount: '123456',
        currency,
      });

      assert.deepEqual(
        parse(
          format(
            { amount: '-123456', currency },
            { currencyDisplay: 'code' },
            'de-DE',
          ),
          currency,
          'de-DE',
        ),
        { amount: '-123456', currency },
      );
    }
  });

  it('supports a few common languages, regions and currencies with many numerical amounts (fast test)', () => {
    const locales = getFewLocales();
    const currencies = getFewCurrencies(at);
    for (const locale of locales) {
      for (const numericalAmount of [
        '0',
        '-0',
        '1',
        '-1',
        '10',
        '-10',
        '12',
        '-12',
        '100',
        '-100',
        '123',
        '-123',
        '1000',
        '-1000',
        '1234',
        '-1234',
        '10000',
        '-10000',
        '12340',
        '12345',
        '123456',
        '-123456',
        '1234567',
        '-1234567',
      ]) {
        for (const currency of currencies) {
          const amount = format(
            {
              amount: numericalAmount,
              currency: currency.alphabeticCode,
            },
            {},
            locale.baseName,
          );
          const parsedAmount = parse(
            amount,
            currency.alphabeticCode,
            locale.baseName,
          );
          assert.deepEqual(parsedAmount, {
            amount: numericalAmount,
            currency: currency.alphabeticCode,
          });
        }
      }
    }
  });

  it('supports most common languages, regions and currencies (slow test)', () => {
    const locales = getManyLocales();
    const currencies = getManyCurrencies(at);
    for (const locale of locales) {
      for (const numericalAmount of [
        '0',
        '-0',
        '1',
        '-1',
        '10',
        '12',
        '100',
        '-100',
        '123',
        '1000',
        '1234',
        '12345',
        '-12345',
        '123456',
        '1234567',
      ]) {
        for (const currency of currencies) {
          const amount = format(
            {
              amount: numericalAmount,
              currency: currency.alphabeticCode,
            },
            {},
            locale.baseName,
          );
          try {
            const parsedAmount = parse(
              amount,
              currency.alphabeticCode,
              locale.baseName,
            );
            assert.deepEqual(parsedAmount, {
              amount: numericalAmount,
              currency: currency.alphabeticCode,
            });
          } catch (error) {
            throw new Error(
              `Failed for locale ${locale.baseName} and currency ${currency.alphabeticCode} with amount ${amount}`,
              { cause: error },
            );
          }
        }
      }
    }
  });
});
