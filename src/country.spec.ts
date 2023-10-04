// country.spec.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';

import {
  allCountries,
  type CountryAlpha2,
  type CurrencyAlphabeticCode,
  getCountriesForCurrency,
  getCountry,
} from './index';

describe('country', () => {
  it('getAll returns all countries', () => {
    assert.equal(allCountries().length, 246);
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code', () => {
    assert.deepEqual(getCountry('USA'), {
      alpha2: 'US',
      alpha3: 'USA',
      currencyCodes: ['USD'],
      name: 'US',
      numeric: '840',
    });

    assert.deepEqual(getCountry('NZ'), {
      alpha2: 'NZ',
      alpha3: 'NZL',
      currencyCodes: ['NZD'],
      name: 'New Zealand',
      numeric: '554',
    });

    assert.deepEqual(getCountry('332'), {
      alpha2: 'HT',
      alpha3: 'HTI',
      currencyCodes: ['HTG', 'USD'],
      name: 'Haiti',
      numeric: '332',
    });

    assert.deepEqual(getCountry('AUS'), getCountry('036'));
    assert.deepEqual(getCountry('036'), getCountry('AU'));
    assert.deepEqual(getCountry('USA'), getCountry('840'));
    assert.deepEqual(getCountry('840'), getCountry('US'));

    assert.throws(
      () => getCountry(undefined as unknown as CountryAlpha2),
      /^TypeError: Country not found for code 'undefined'$/u,
    );
    assert.throws(() => getCountry('' as CountryAlpha2), /^TypeError: Country not found for code ''$/u);
    assert.throws(() => getCountry(840 as unknown as CountryAlpha2), /^TypeError: Country not found for code '840'$/u);
    assert.throws(() => getCountry('INVALID' as CountryAlpha2), /^TypeError: Country not found for code 'INVALID'$/u);
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency', () => {
    assert.deepEqual(getCountriesForCurrency('JPY'), ['JPN']);
    assert.deepEqual(getCountriesForCurrency('CAD'), ['CAN']);
    assert.deepEqual(getCountriesForCurrency('NZD'), ['COK', 'NIU', 'NZL', 'PCN', 'TKL']);
    assert.deepEqual(getCountriesForCurrency('AUD'), ['AUS', 'CCK', 'CXR', 'HMD', 'KIR', 'NFK', 'NRU', 'TUV']);
    assert.deepEqual(getCountriesForCurrency('USD'), [
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
      'PSE',
      'SLV',
      'TCA',
      'TLS',
      'UMI',
      'USA',
      'VGB',
      'VIR',
    ]);
    assert.deepEqual(getCountriesForCurrency('EUR'), [
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

    assert.deepEqual(getCountriesForCurrency('XXX'), []);
    assert.deepEqual(getCountriesForCurrency('' as CurrencyAlphabeticCode), []);
    assert.deepEqual(getCountriesForCurrency(undefined as unknown as CurrencyAlphabeticCode), []);
  });
});
