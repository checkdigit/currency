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
  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.equal(currency(new Date().toISOString()).getMinorUnitDigits('USD'), 2);
    assert.equal(currency(new Date().toISOString()).getMinorUnitDigits('JPY'), 0);
  });

  it('getCurrency will find currencies based on numeric or alphabetic codes', () => {
    assert.deepEqual(currency(new Date().toISOString()).getCurrency('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554',
    });
    assert.deepEqual(currency(new Date().toISOString()).getCurrency('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840',
    });
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('AUD'),
      currency(new Date().toISOString()).getCurrency('036'),
    );
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('CAD'),
      currency(new Date().toISOString()).getCurrency('124'),
    );
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('NZD'),
      currency(new Date().toISOString()).getCurrency('554'),
    );
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('EUR'),
      currency(new Date().toISOString()).getCurrency('978'),
    );
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('KRW'),
      currency(new Date().toISOString()).getCurrency('410'),
    );
    assert.deepEqual(
      currency(new Date().toISOString()).getCurrency('USD'),
      currency(new Date().toISOString()).getCurrency('840'),
    );
    assert.throws(
      () => currency(new Date().toISOString()).getCurrency(undefined as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'undefined'$/u,
    );
    assert.throws(
      () => currency(new Date().toISOString()).getCurrency('' as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code ''$/u,
    );
    assert.throws(
      () => currency(new Date().toISOString()).getCurrency(840 as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code '840'$/u,
    );
    assert.throws(
      () => currency(new Date().toISOString()).getCurrency('INVALID' as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'INVALID'$/u,
    );
  });

  it('getSymbol', () => {
    const currencies = currency(new Date().toISOString())
      .allCurrencies()
      .map(({ alphabeticCode }) => currency(new Date().toISOString()).getSymbol(alphabeticCode));
    assert.ok(currencies.every((item) => typeof item === 'string' && item.length > 0));
    assert.equal(currency(new Date().toISOString()).getSymbol('USD'), '$');
    assert.equal(currency(new Date().toISOString()).getSymbol('CAD'), 'CA$');
    assert.equal(currency(new Date().toISOString()).getSymbol('NZD'), 'NZ$');
    assert.equal(currency(new Date().toISOString()).getSymbol('JPY'), '¥');
  });

  it('getSymbol for non-US locales', () => {
    assert.equal(currency(new Date().toISOString()).getSymbol('JPY', 'ja-JP'), '￥');
    assert.equal(currency(new Date().toISOString()).getSymbol('NZD', 'en-NZ'), '$');
    assert.equal(currency(new Date().toISOString()).getSymbol('CAD', 'en-CA'), '$');
  });

  it('getCurrency for a alphabeticCode or numericCode at specific time', () => {
    assert.deepEqual(currency('2023-04-16T00:00:00.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });

    assert.deepEqual(currency('2023-04-15T00:00:00.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });

    assert.deepEqual(currency('2023-04-14T00:00:00.000Z').getCurrency('352'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 2,
    });

    assert.deepEqual(currency(new Date().toISOString()).getCurrency('191'), {
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

    assert.deepEqual(currency(new Date().toISOString()).getCurrency('352'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });
  });
});
