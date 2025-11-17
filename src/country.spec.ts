// country.spec.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import type { CountryAlpha2 } from './country.ts';
import type { CurrencyAlphabeticCode } from './currency.ts';
import country from './index.ts';

describe('country', () => {
  const at = new Date().toISOString();
  const { allCountries, getCountry, getCountriesForCurrency } = country(at);

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
      `TypeError: Country not found for code 'undefined'`,
    );
    assert.throws(
      () => getCountry('' as CountryAlpha2),
      `TypeError: Country not found for code ''`,
    );
    assert.throws(
      () => getCountry(840 as unknown as CountryAlpha2),
      `TypeError: Country not found for code '840'`,
    );
    assert.throws(
      () => getCountry('INVALID' as CountryAlpha2),
      `TypeError: Country not found for code 'INVALID'`,
    );
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency', () => {
    assert.deepEqual(getCountriesForCurrency('JPY'), ['JPN']);
    assert.deepEqual(getCountriesForCurrency('CAD'), ['CAN']);
    assert.deepEqual(getCountriesForCurrency('NZD'), [
      'COK',
      'NIU',
      'NZL',
      'PCN',
      'TKL',
    ]);
    assert.deepEqual(getCountriesForCurrency('AUD'), [
      'AUS',
      'CCK',
      'CXR',
      'HMD',
      'KIR',
      'NFK',
      'NRU',
      'TUV',
    ]);
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

    assert.deepEqual(getCountriesForCurrency('XXX'), []);
    assert.deepEqual(getCountriesForCurrency('' as CurrencyAlphabeticCode), []);
    assert.deepEqual(
      getCountriesForCurrency(undefined as unknown as CurrencyAlphabeticCode),
      [],
    );
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency at specific time', () => {
    assert.deepEqual(
      country('2022-12-30T00:00:00.000Z').getCountriesForCurrency('EUR'),
      [
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
      ],
    );
  });

  it('getCountry  based on alpha2, alpha3 or numeric code will throw an error if we pass any date pre-2018', () => {
    assert.throws(() => {
      country('2017-12-31T23:59:00.000Z').getCountry('HR');
    }, `TypeError: Lookup functions do not currently support the provided date '2017-12-31T23:59:00.000Z'. Support is available for dates starting from 2018 onwards`);
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code at 2018-01-01T00:00:59', () => {
    assert.deepEqual(country('2018-01-01T00:00:59.000Z').getCountry('HR'), {
      name: 'Croatia',
      alpha2: 'HR',
      alpha3: 'HRV',
      numeric: '191',
      currencyCodes: ['HRK'],
    });
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code at specific time', () => {
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

    assert.deepEqual(getCountry('352'), {
      name: 'Iceland',
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: '352',
      currencyCodes: ['ISK'],
    });
  });
});
