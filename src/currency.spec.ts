// currency.spec.ts

/*
 * Copyright (c) 2021 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import * as assert from 'node:assert';

import { allCurrencies, CurrencyAlphabeticCode, getCurrency, getMinorUnitDigits, getSymbol } from './index';

describe('currency', () => {
  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.equal(getMinorUnitDigits('USD'), 2);
    assert.equal(getMinorUnitDigits('JPY'), 0);
  });

  it('getCurrency will find currencies based on numeric or alphabetic codes', () => {
    assert.deepEqual(getCurrency('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554',
    });
    assert.deepEqual(getCurrency('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840',
    });
    assert.deepEqual(getCurrency('AUD'), getCurrency('036'));
    assert.deepEqual(getCurrency('CAD'), getCurrency('124'));
    assert.deepEqual(getCurrency('NZD'), getCurrency('554'));
    assert.deepEqual(getCurrency('EUR'), getCurrency('978'));
    assert.deepEqual(getCurrency('KRW'), getCurrency('410'));
    assert.deepEqual(getCurrency('USD'), getCurrency('840'));
    assert.throws(
      () => getCurrency(undefined as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'undefined'$/u
    );
    assert.throws(() => getCurrency('' as CurrencyAlphabeticCode), /^TypeError: Currency not found for code ''$/u);
    assert.throws(
      () => getCurrency(840 as unknown as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code '840'$/u
    );
    assert.throws(
      () => getCurrency('INVALID' as CurrencyAlphabeticCode),
      /^TypeError: Currency not found for code 'INVALID'$/u
    );
  });

  it('getSymbol', () => {
    const currencies = allCurrencies().map(({ alphabeticCode }) => getSymbol(alphabeticCode));
    assert.ok(currencies.every((currency) => typeof currency === 'string' && currency.length > 0));
    assert.equal(getSymbol('USD'), '$');
    assert.equal(getSymbol('CAD'), 'CA$');
    assert.equal(getSymbol('NZD'), 'NZ$');
    assert.equal(getSymbol('JPY'), '¥');
  });

  it('getSymbol for non-US locales', () => {
    assert.equal(getSymbol('JPY', 'ja-JP'), '￥');
    assert.equal(getSymbol('NZD', 'en-NZ'), '$');
    assert.equal(getSymbol('CAD', 'en-CA'), '$');
  });
});
