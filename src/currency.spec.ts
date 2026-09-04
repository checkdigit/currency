// currency.spec.ts

/*
 * Copyright (c) 2021-2026 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import type { CurrencyAlphabeticCode } from './currencies.ts';
import currency from './index.ts';

describe('currency', () => {
  const at = new Date().toISOString();
  const { findCurrency, getCurrency, getMinorUnitDigits, getSymbol } =
    currency(at);

  it('getMinorUnitDigits returns correct number for each currency', () => {
    assert.equal(getMinorUnitDigits('USD'), 2);
    assert.equal(getMinorUnitDigits('JPY'), 0);
    assert.equal(getMinorUnitDigits('RSD'), 2);
  });

  it('includes every currency supported by the current Intl implementation', () => {
    const availableCurrencies = new Set<string>(
      currency(at)
        .allCurrencies()
        .map(({ alphabeticCode }) => alphabeticCode),
    );

    assert.deepEqual(
      Intl.supportedValuesOf('currency').filter(
        (currencyCode) => !availableCurrencies.has(currencyCode),
      ),
      [],
    );
  });

  it('findCurrency will find currencies based on name, numeric or alphabetic codes', () => {
    assert.deepEqual(findCurrency('NZD'), {
      alphabeticCode: 'NZD',
      minorUnits: 2,
      name: 'New Zealand Dollar',
      numericCode: '554',
    });
    assert.deepEqual(findCurrency('USD'), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840',
    });
    assert.deepEqual(findCurrency(840), {
      alphabeticCode: 'USD',
      minorUnits: 2,
      name: 'US Dollar',
      numericCode: '840',
    });
    assert.deepEqual(findCurrency('nzd  '), findCurrency('  554'));
    assert.deepEqual(findCurrency('new zealand dollar'), findCurrency('554'));
    assert.throws(() => findCurrency(undefined as unknown as string), {
      message: `Currency not found for 'undefined'`,
    });
    assert.throws(() => findCurrency(''), {
      message: `Currency not found for ''`,
    });
    assert.throws(() => findCurrency('INVALID'), {
      message: `Currency not found for 'INVALID'`,
    });
  });

  it('findCurrency resolves duplicate names to their canonical currency', () => {
    const beforeVed = currency('2021-09-30T23:59:59.999Z');
    assert.equal(
      beforeVed.findCurrency('Bolívar Soberano').alphabeticCode,
      'VES',
    );

    const afterVed = currency('2021-10-01T00:00:00.001Z');
    assert.equal(
      afterVed.findCurrency('  bolívar soberano  ').alphabeticCode,
      'VES',
    );
    assert.equal(afterVed.findCurrency('VED').alphabeticCode, 'VED');
    assert.equal(afterVed.findCurrency(926).alphabeticCode, 'VED');

    const beforeSle = currency('2022-03-31T23:59:59.999Z');
    assert.equal(beforeSle.findCurrency('Leone').alphabeticCode, 'SLL');

    const afterSle = currency('2022-04-01T00:00:00.001Z');
    assert.equal(afterSle.findCurrency('Leone').alphabeticCode, 'SLE');
    assert.equal(afterSle.findCurrency('SLL').alphabeticCode, 'SLL');
    assert.equal(afterSle.findCurrency(694).alphabeticCode, 'SLL');
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
    assert.deepEqual(getCurrency('VED'), {
      alphabeticCode: 'VED',
      minorUnits: 2,
      name: 'Bolívar Soberano',
      numericCode: '926',
    });
    assert.deepEqual(getCurrency('SLE'), {
      alphabeticCode: 'SLE',
      minorUnits: 2,
      name: 'Leone',
      numericCode: '925',
    });
    assert.deepEqual(getCurrency('ZWG'), {
      alphabeticCode: 'ZWG',
      minorUnits: 2,
      name: 'Zimbabwe Gold',
      numericCode: '924',
    });
    assert.deepEqual(getCurrency('XCG'), {
      alphabeticCode: 'XCG',
      minorUnits: 2,
      name: 'Caribbean Guilder',
      numericCode: '532',
    });
    assert.deepEqual(getCurrency('XAD'), {
      alphabeticCode: 'XAD',
      isFund: true,
      minorUnits: 2,
      name: 'Arab Accounting Dinar',
      numericCode: '396',
    });
    assert.deepEqual(getCurrency('AUD'), getCurrency('036'));
    assert.deepEqual(getCurrency('CAD'), getCurrency('124'));
    assert.deepEqual(getCurrency('NZD'), getCurrency('554'));
    assert.deepEqual(getCurrency('EUR'), getCurrency('978'));
    assert.deepEqual(getCurrency('KRW'), getCurrency('410'));
    assert.deepEqual(getCurrency('XCG'), getCurrency('532'));
    assert.deepEqual(getCurrency('ZWG'), getCurrency('924'));
    assert.deepEqual(getCurrency('SLE'), getCurrency('925'));
    assert.deepEqual(getCurrency('VED'), getCurrency('926'));
    assert.deepEqual(getCurrency('USD'), getCurrency('840'));
    assert.throws(
      () => getCurrency(undefined as unknown as CurrencyAlphabeticCode),
      `TypeError: Currency not found for code 'undefined'`,
    );
    assert.throws(
      () => getCurrency('' as CurrencyAlphabeticCode),
      `TypeError: Currency not found for code ''`,
    );
    assert.throws(
      () => getCurrency(840 as unknown as CurrencyAlphabeticCode),
      `TypeError: Currency not found for code '840'`,
    );
    assert.throws(
      () => getCurrency('INVALID' as CurrencyAlphabeticCode),
      `TypeError: Currency not found for code 'INVALID'`,
    );
  });

  it('getSymbol', () => {
    const currencies = currency(new Date().toISOString())
      .allCurrencies()
      .map(({ alphabeticCode }) => getSymbol(alphabeticCode));
    assert.ok(
      currencies.every((item) => typeof item === 'string' && item.length > 0),
    );
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

  it('getCurrency for a alphabeticCode or numericCode will throw an error if we pass any date pre-2018', () => {
    assert.throws(() => {
      currency('2017-12-31T23:59:00.000Z').getCurrency('ISK');
    }, `TypeError: Lookup functions do not currently support the provided date '2017-12-31T23:59:00.000Z'. Support is available for dates starting from 2018 onwards.`);
  });

  it('getCurrency for a alphabeticCode or numericCode at 2018-01-01T00:00:59', () => {
    assert.deepEqual(currency('2018-01-01T00:00:59.000Z').getCurrency('ISK'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 2,
    });
  });

  it('getCurrency for a alphabeticCode or numericCode at specific time', () => {
    assert.throws(
      () => currency('2022-03-31T23:59:59.999Z').getCurrency('SLE'),
      `TypeError: Currency not found for code 'SLE'`,
    );

    assert.deepEqual(currency('2022-04-01T00:00:00.001Z').getCurrency('SLE'), {
      name: 'Leone',
      alphabeticCode: 'SLE',
      numericCode: '925',
      minorUnits: 2,
    });

    assert.deepEqual(currency('2025-03-30T23:59:59.999Z').getCurrency('532'), {
      name: 'Netherlands Antillean Guilder',
      alphabeticCode: 'ANG',
      numericCode: '532',
      minorUnits: 2,
    });

    assert.deepEqual(currency('2025-03-31T00:00:00.001Z').getCurrency('532'), {
      name: 'Caribbean Guilder',
      alphabeticCode: 'XCG',
      numericCode: '532',
      minorUnits: 2,
    });

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

    assert.deepEqual(getCurrency('191'), {
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

    assert.deepEqual(getCurrency('352'), {
      name: 'Iceland Krona',
      alphabeticCode: 'ISK',
      numericCode: '352',
      minorUnits: 0,
    });
  });
});
