// country.spec.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';

import { type CountryAlpha2 } from './country';

import { type CurrencyAlphabeticCode } from './currency';
import { default as country } from './index';

describe('country', () => {
  it('getAll returns all countries', () => {
    assert.equal(country(new Date().toISOString()).allCountries().length, 246);
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code', () => {
    assert.deepEqual(country(new Date().toISOString()).getCountry('USA'), {
      alpha2: 'US',
      alpha3: 'USA',
      currencyCodes: ['USD'],
      name: 'US',
      numeric: '840',
    });

    assert.deepEqual(country(new Date().toISOString()).getCountry('NZ'), {
      alpha2: 'NZ',
      alpha3: 'NZL',
      currencyCodes: ['NZD'],
      name: 'New Zealand',
      numeric: '554',
    });

    assert.deepEqual(country(new Date().toISOString()).getCountry('332'), {
      alpha2: 'HT',
      alpha3: 'HTI',
      currencyCodes: ['HTG', 'USD'],
      name: 'Haiti',
      numeric: '332',
    });

    assert.deepEqual(
      country(new Date().toISOString()).getCountry('AUS'),
      country(new Date().toISOString()).getCountry('036'),
    );
    assert.deepEqual(
      country(new Date().toISOString()).getCountry('036'),
      country(new Date().toISOString()).getCountry('AU'),
    );
    assert.deepEqual(
      country(new Date().toISOString()).getCountry('USA'),
      country(new Date().toISOString()).getCountry('840'),
    );
    assert.deepEqual(
      country(new Date().toISOString()).getCountry('840'),
      country(new Date().toISOString()).getCountry('US'),
    );

    assert.throws(
      () => country(new Date().toISOString()).getCountry(undefined as unknown as CountryAlpha2),
      /^TypeError: Country not found for code 'undefined'$/u,
    );
    assert.throws(
      () => country(new Date().toISOString()).getCountry('' as CountryAlpha2),
      /^TypeError: Country not found for code ''$/u,
    );
    assert.throws(
      () => country(new Date().toISOString()).getCountry(840 as unknown as CountryAlpha2),
      /^TypeError: Country not found for code '840'$/u,
    );
    assert.throws(
      () => country(new Date().toISOString()).getCountry('INVALID' as CountryAlpha2),
      /^TypeError: Country not found for code 'INVALID'$/u,
    );
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency', () => {
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('JPY'), ['JPN']);
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('CAD'), ['CAN']);
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('NZD'), [
      'COK',
      'NIU',
      'NZL',
      'PCN',
      'TKL',
    ]);
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('AUD'), [
      'AUS',
      'CCK',
      'CXR',
      'HMD',
      'KIR',
      'NFK',
      'NRU',
      'TUV',
    ]);
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('USD'), [
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
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('EUR'), [
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
      'HRV',
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

    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('XXX'), []);
    assert.deepEqual(country(new Date().toISOString()).getCountriesForCurrency('' as CurrencyAlphabeticCode), []);
    assert.deepEqual(
      country(new Date().toISOString()).getCountriesForCurrency(undefined as unknown as CurrencyAlphabeticCode),
      [],
    );
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency at specific time', () => {
    assert.deepEqual(country('2022-12-30T00:00:00.000Z').getCountriesForCurrency('EUR'), [
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
  });

  it('getCurrency for a alphabeticCode or numericCode at specific time', () => {
    assert.deepEqual(country('2023-01-16T00:00:00.000Z').getCountry('HR'), {
      name: 'Croatia',
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: '191',
      currencyCodes: ['EUR'],
    });

    assert.deepEqual(country('2022-12-31T23:59:00.000Z').getCountry('HR'), {
      name: 'Croatia',
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: '191',
      currencyCodes: ['HRK'],
    });

    assert.deepEqual(country('2023-03-15T00:00:00.000Z').getCountry('352'), {
      name: 'Iceland',
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: '352',
      currencyCodes: ['ISK'],
    });

    assert.deepEqual(country(new Date().toISOString()).getCountry('352'), {
      name: 'Iceland',
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: '352',
      currencyCodes: ['ISK'],
    });
  });
});
