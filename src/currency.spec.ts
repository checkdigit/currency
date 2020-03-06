// currency.spec.ts

import * as assert from 'assert';

import { allCurrencies, CurrencyAlphabeticCode, find, getMinorUnitDigits, getSymbol } from './index';

describe('currency', () => {
  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.strictEqual(getMinorUnitDigits('USD'), 2);
    assert.strictEqual(getMinorUnitDigits('JPY'), 0);
  });

  it('find currencies based on numeric or alphabetic codes', () => {
    assert.deepStrictEqual(find('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554'
    });
    assert.deepStrictEqual(find('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840'
    });
    assert.deepStrictEqual(find('AUD'), find('036'));
    assert.deepStrictEqual(find('CAD'), find('124'));
    assert.deepStrictEqual(find('NZD'), find('554'));
    assert.deepStrictEqual(find('EUR'), find('978'));
    assert.deepStrictEqual(find('KRW'), find('410'));
    assert.deepStrictEqual(find('USD'), find('840'));
    assert.throws(
      () => find((undefined as unknown) as CurrencyAlphabeticCode),
      /^Error: Currency not found for code 'undefined'$/u
    );
    assert.throws(() => find('' as CurrencyAlphabeticCode), /^Error: Currency not found for code ''$/u);
    assert.throws(
      () => find((840 as unknown) as CurrencyAlphabeticCode),
      /^Error: Currency not found for code '840'$/u
    );
    assert.throws(() => find('INVALID' as CurrencyAlphabeticCode), /^Error: Currency not found for code 'INVALID'$/u);
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
