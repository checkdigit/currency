// currency.spec.ts

import * as assert from 'assert';

import { allCurrencies, CurrencyAlphabeticCode, getCurrency, getMinorUnitDigits, getSymbol } from './index';

describe('currency', () => {
  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.strictEqual(getMinorUnitDigits('USD'), 2);
    assert.strictEqual(getMinorUnitDigits('JPY'), 0);
  });

  it('getCurrency will find currencies based on numeric or alphabetic codes', () => {
    assert.deepStrictEqual(getCurrency('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554'
    });
    assert.deepStrictEqual(getCurrency('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840'
    });
    assert.deepStrictEqual(getCurrency('AUD'), getCurrency('036'));
    assert.deepStrictEqual(getCurrency('CAD'), getCurrency('124'));
    assert.deepStrictEqual(getCurrency('NZD'), getCurrency('554'));
    assert.deepStrictEqual(getCurrency('EUR'), getCurrency('978'));
    assert.deepStrictEqual(getCurrency('KRW'), getCurrency('410'));
    assert.deepStrictEqual(getCurrency('USD'), getCurrency('840'));
    assert.throws(
      () => getCurrency((undefined as unknown) as CurrencyAlphabeticCode),
      /^Error: Currency not found for code 'undefined'$/u
    );
    assert.throws(() => getCurrency('' as CurrencyAlphabeticCode), /^Error: Currency not found for code ''$/u);
    assert.throws(
      () => getCurrency((840 as unknown) as CurrencyAlphabeticCode),
      /^Error: Currency not found for code '840'$/u
    );
    assert.throws(
      () => getCurrency('INVALID' as CurrencyAlphabeticCode),
      /^Error: Currency not found for code 'INVALID'$/u
    );
  });

  it('getSymbol', () => {
    const currencies = allCurrencies().map(({ alphabeticCode }) => getSymbol(alphabeticCode));
    assert.ok(currencies.every(currency => typeof currency === 'string' && currency.length > 0));
    assert.strictEqual(getSymbol('USD'), '$');
    assert.strictEqual(getSymbol('CAD'), 'CA$');
    assert.strictEqual(getSymbol('NZD'), 'NZ$');
    assert.strictEqual(getSymbol('JPY'), '¥');
  });

  /**
   * TODO: until Node 14 (which will contain the full ICU), only en-US locale is supported.  Re-enable this test then.
   */
  xit('getSymbol for non-US locales', () => {
    assert.strictEqual(getSymbol('JPY', 'ja-JP'), '￥');
    assert.strictEqual(getSymbol('NZD', 'en-NZ'), '$');
    assert.strictEqual(getSymbol('CAD', 'en-CA'), '$');
  });
});
