// country.spec.ts

/*
 * Copyright (c) 2021 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import * as assert from 'assert';

import { allCountries, CountryAlpha2, CurrencyAlphabeticCode, getCountriesForCurrency, getCountry } from './index';

describe('country', () => {
  it('getAll returns all countries', () => {
    assert.strictEqual(allCountries().length, 245);
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code', () => {
    assert.deepStrictEqual(getCountry('USA'), {
      alpha2: 'US',
      alpha3: 'USA',
      currencyCodes: ['USD'],
      name: 'US',
      numeric: '840',
    });

    assert.deepStrictEqual(getCountry('NZ'), {
      alpha2: 'NZ',
      alpha3: 'NZL',
      currencyCodes: ['NZD'],
      name: 'New Zealand',
      numeric: '554',
    });

    assert.deepStrictEqual(getCountry('332'), {
      alpha2: 'HT',
      alpha3: 'HTI',
      currencyCodes: ['HTG', 'USD'],
      name: 'Haiti',
      numeric: '332',
    });

    assert.deepStrictEqual(getCountry('AUS'), getCountry('036'));
    assert.deepStrictEqual(getCountry('036'), getCountry('AU'));
    assert.deepStrictEqual(getCountry('USA'), getCountry('840'));
    assert.deepStrictEqual(getCountry('840'), getCountry('US'));

    assert.throws(
      () => getCountry((undefined as unknown) as CountryAlpha2),
      /^Error: Country not found for code 'undefined'$/u
    );
    assert.throws(() => getCountry('' as CountryAlpha2), /^Error: Country not found for code ''$/u);
    assert.throws(() => getCountry((840 as unknown) as CountryAlpha2), /^Error: Country not found for code '840'$/u);
    assert.throws(() => getCountry('INVALID' as CountryAlpha2), /^Error: Country not found for code 'INVALID'$/u);
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency', () => {
    assert.deepStrictEqual(getCountriesForCurrency('JPY'), ['JPN']);
    assert.deepStrictEqual(getCountriesForCurrency('CAD'), ['CAN']);
    assert.deepStrictEqual(getCountriesForCurrency('NZD'), ['COK', 'NIU', 'NZL', 'PCN', 'TKL']);
    assert.deepStrictEqual(getCountriesForCurrency('AUD'), ['AUS', 'CCK', 'CXR', 'HMD', 'KIR', 'NFK', 'NRU', 'TUV']);
    assert.deepStrictEqual(getCountriesForCurrency('USD'), [
      'ASM',
      'BES',
      'ECU',
      'FSM',
      'GUM',
      'HTI',
      'IOT',
      'MHL',
      'MNP',
      'PAN',
      'PLW',
      'PRI',
      'SLV',
      'TCA',
      'TLS',
      'UMI',
      'USA',
      'VGB',
      'VIR',
    ]);
    assert.deepStrictEqual(getCountriesForCurrency('EUR'), [
      'ALA',
      'AND',
      'ATF',
      'AUT',
      'BEL',
      'BLM',
      'CYP',
      'DEU',
      'ESP',
      'EST',
      'FIN',
      'FRA',
      'GLP',
      'GRC',
      'GUF',
      'IRL',
      'ITA',
      'LTU',
      'LUX',
      'LVA',
      'MAF',
      'MCO',
      'MLT',
      'MNE',
      'MTQ',
      'MYT',
      'NLD',
      'PRT',
      'REU',
      'SMR',
      'SPM',
      'SVK',
      'SVN',
      'VAT',
    ]);

    assert.deepStrictEqual(getCountriesForCurrency('XXX'), []);
    assert.deepStrictEqual(getCountriesForCurrency('' as CurrencyAlphabeticCode), []);
    assert.deepStrictEqual(getCountriesForCurrency((undefined as unknown) as CurrencyAlphabeticCode), []);
  });
});
