// currency.spec.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import * as assert from 'node:assert';

import type { CurrencyAlphabeticCode } from './currencies';
import { default as currency } from './index';

describe('currency', () => {
  const at = new Date().toISOString();
  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.equal(currency(at).getMinorUnitDigits('USD'), 2);
    assert.equal(currency(at).getMinorUnitDigits('JPY'), 0);
  });

  it('getCurrency will find currencies based on numeric or alphabetic codes', () => {
    assert.deepEqual(currency(at).getCurrency('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554',
    });
    assert.deepEqual(currency(at).getCurrency('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840',
    });
    assert.deepEqual(currency(at).getCurrency('AUD'), currency(at).getCurrency('036'));
    assert.deepEqual(currency(at).getCurrency('CAD'), currency(at).getCurrency('124'));
    assert.deepEqual(currency(at).getCurrency('NZD'), currency(at).getCurrency('554'));
    assert.deepEqual(currency(at).getCurrency('EUR'), currency(at).getCurrency('978'));
    assert.deepEqual(currency(at).getCurrency('KRW'), currency(at).getCurrency('410'));
    assert.deepEqual(currency(at).getCurrency('USD'), currency(at).getCurrency('840'));
    assert.throws(
      () => currency(at).getCurrency(undefined as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'undefined'$/u,
    );
    assert.throws(
      () => currency(at).getCurrency('' as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code ''$/u,
    );
    assert.throws(
      () => currency(at).getCurrency(840 as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code '840'$/u,
    );
    assert.throws(
      () => currency(at).getCurrency('INVALID' as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'INVALID'$/u,
    );
  });

  it('getSymbol', () => {
    const currencies = currency(new Date().toISOString())
      .allCurrencies()
      .map(({ alphabeticCode }) => currency(at).getSymbol(alphabeticCode));
    assert.ok(currencies.every((item) => typeof item === 'string' && item.length > 0));
    assert.equal(currency(at).getSymbol('USD'), '$');
    assert.equal(currency(at).getSymbol('CAD'), 'CA$');
    assert.equal(currency(at).getSymbol('NZD'), 'NZ$');
    assert.equal(currency(at).getSymbol('JPY'), '¥');
  });

  it('getSymbol for non-US locales', () => {
    assert.equal(currency(at).getSymbol('JPY', 'ja-JP'), '￥');
    assert.equal(currency(at).getSymbol('NZD', 'en-NZ'), '$');
    assert.equal(currency(at).getSymbol('CAD', 'en-CA'), '$');
  });

  it('getCurrency for a alphabeticCode or numericCode will throw an error if we pass any date pre-1970', () => {
    assert.throws(() => {
      currency('1969-12-31T23:59:00.000Z').getCurrency('ISK');
    }, /^TypeError: Currency not found for code 'ISK'$/u);
  });

  it('getCurrency for a alphabeticCode or numericCode at 1970-01-01T00:00:59', () => {
    assert.deepEqual(currency('1970-01-01T00:00:59.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 2,
    });
  });

  it('getCurrency for a alphabeticCode or numericCode at specific time', () => {
    assert.deepEqual(currency('2023-04-15T00:00:59.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });

    assert.deepEqual(currency('2023-04-15T00:00:00.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 2,
    });

    assert.deepEqual(currency('2023-04-14T00:00:00.000Z').getCurrency('352'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 2,
    });

    assert.deepEqual(currency(at).getCurrency('191'), {
      name: 'Kuna',
      alphabeticCode: 'HRK',
      numericCode: '191',
      minorUnits: 2,
    });

    assert.deepEqual(currency('2022-03-15T00:00:00.000Z').getCurrency('HRK'), {
      name: 'Kuna',
      alphabeticCode: 'HRK',
      numericCode: '191',
      minorUnits: 2,
    });

    assert.deepEqual(currency('2023-09-15T00:00:00.000Z').getCurrency('HRK'), {
      name: 'Kuna',
      alphabeticCode: 'HRK',
      numericCode: '191',
      minorUnits: 2,
    });

    assert.deepEqual(currency(at).getCurrency('352'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });
  });
});
