// format.spec.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import currency, { type CurrencyAlphabeticCode } from './currency.ts';
import formatLibrary from './index.ts';

import { getManyLocales } from './locales.test.ts';
import { getUnsupportedCurrencies } from './currencies.test.ts';

describe('format', () => {
  const at = new Date().toISOString();
  const { getMinorUnitDigits } = currency(at);
  const { format } = formatLibrary(at);

  function check(
    code: CurrencyAlphabeticCode,
    amount: number,
    locale?: string,
  ) {
    const minorUnitDigits = getMinorUnitDigits(code);
    const minorUnit = 10 ** minorUnitDigits;
    const internal = format(
      { amount: amount === 0 ? amount : BigInt(amount), currency: code },
      {},
      locale,
    );
    const reference = Intl.NumberFormat(locale, {
      style: 'currency',
      currency: code,
    }).format(amount / minorUnit);
    assert.equal(internal, reference, `${code} ${amount} ${locale ?? ''}`);
  }

  it('supports full ICU', () => {
    assert.equal(
      format(
        { amount: BigInt('123456789'), currency: 'USD' },
        { currencyDisplay: 'code' },
        'de-DE',
      ),
      '1.234.567,89 USD',
    );
    assert.equal(
      format({ amount: BigInt('123456789'), currency: 'EUR' }, {}, 'es-ES'),
      '1.234.567,89 €',
    );
  });

  it('matches Intl implementation for all known locales', () => {
    getManyLocales().forEach((locale) => {
      check('USD', 100_000_000, locale.baseName);
    });
  });

  it('matches Intl number implementation for all supported currencies', () => {
    // Intl.NumberFormat does not support the currencies below per the ISO 4217 standard.
    const unsupportedCurrencies = getUnsupportedCurrencies(at);
    for (const code of currency(new Date().toISOString())
      .allCurrencies()
      .filter(
        ({ alphabeticCode }) =>
          !unsupportedCurrencies.some(
            (unsupportedCurrency) =>
              alphabeticCode === unsupportedCurrency.alphabeticCode,
          ),
      )
      .map(({ alphabeticCode }) => alphabeticCode)) {
      for (let power = 0; power < 15; power++) {
        const base = 10 ** power;
        check(code, base - 1);
        check(code, base);
        check(code, base + 1);
        check(code, -(base - 1));
        check(code, -base);
        check(code, -(base + 1));
      }
    }
  });

  it('support zero-based edge cases', () => {
    assert.equal(format({ amount: -0, currency: 'USD' }), '-$0.00');
    assert.equal(format({ amount: '-0', currency: 'USD' }), '-$0.00');
    assert.equal(format({ amount: 0, currency: 'USD' }), '$0.00');
    assert.equal(format({ amount: BigInt(0), currency: 'USD' }), '$0.00');
    assert.equal(format({ amount: '0', currency: 'USD' }), '$0.00');
  });

  it('support currencyDisplay', () => {
    assert.equal(format({ amount: '0', currency: 'USD' }), '$0.00');
    assert.equal(
      format(
        { amount: '0', currency: 'USD' },
        {
          currencyDisplay: 'symbol',
        },
      ),
      '$0.00',
    );
    assert.equal(
      format(
        { amount: '0', currency: 'USD' },
        {
          currencyDisplay: 'code',
        },
      ),
      'USD 0.00',
    );
    assert.equal(
      format(
        { amount: '0', currency: 'USD' },
        {
          currencyDisplay: 'name',
        },
      ),
      '0.00 US dollars',
    );
  });

  it('support edge cases', () => {
    assert.equal(
      format({
        amount: BigInt('123456789012345678901234567890'),
        currency: 'USD',
      }),
      '$1,234,567,890,123,456,789,012,345,678.90',
    );
    assert.equal(
      format({
        amount: BigInt('-123456789012345678901234567890'),
        currency: 'USD',
      }),
      '-$1,234,567,890,123,456,789,012,345,678.90',
    );
    assert.equal(
      format(
        { amount: '123456', currency: 'USD' },
        {
          useGrouping: false,
        },
      ),
      '$1234.56',
    );
    assert.equal(
      format(
        { amount: '123456', currency: 'USD' },
        {
          useCurrency: false,
          useGrouping: false,
        },
      ),
      '1234.56',
    );
    assert.equal(
      format(
        { amount: '123456', currency: 'USD' },
        {
          useCurrency: false,
          useGrouping: false,
          useDecimal: false,
        },
      ),
      '123456',
    );
    assert.throws(
      () =>
        format(
          { amount: '123456', currency: 'USD' },
          {
            useDecimal: false,
          },
        ),
      {
        message:
          'useDecimal can only be false if useCurrency and useGrouping are also false',
      },
    );
    assert.throws(
      () =>
        format(
          { amount: '123456', currency: 'USD' },
          {
            useGrouping: false,
            useDecimal: false,
          },
        ),
      {
        message:
          'useDecimal can only be false if useCurrency and useGrouping are also false',
      },
    );
    assert.throws(
      () =>
        format(
          { amount: '123456', currency: 'USD' },
          {
            useCurrency: false,
            useDecimal: false,
          },
        ),
      {
        message:
          'useDecimal can only be false if useCurrency and useGrouping are also false',
      },
    );
  });

  it('format will throw an error if we pass any date pre-2018', () => {
    assert.throws(() => {
      formatLibrary('2017-12-31T23:59:00.000Z').format(
        { amount: BigInt('123456789'), currency: 'USD' },
        { currencyDisplay: 'code' },
        'de-DE',
      ); // This is to check for the code with date pre-2018
    }, `TypeError: Lookup functions do not currently support the provided date '2017-12-31T23:59:00.000Z'. Support is available for dates starting from 2018 onwards.`);
  });
});
