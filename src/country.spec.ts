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
  const at = new Date().toISOString();
  it('getAll returns all countries', () => {
    assert.equal(country(at).allCountries().length, 246);
  });

  it('getCountry will find a country based on alpha2, alpha3 or numeric code', () => {
    assert.deepEqual(country(at).getCountry('USA'), {
      alpha2: 'US',
      alpha3: 'USA',
      currencyCodes: ['USD'],
      name: 'US',
      numeric: '840',
    });

    assert.deepEqual(country(at).getCountry('NZ'), {
      alpha2: 'NZ',
      alpha3: 'NZL',
      currencyCodes: ['NZD'],
      name: 'New Zealand',
      numeric: '554',
    });

    assert.deepEqual(country(at).getCountry('332'), {
      alpha2: 'HT',
      alpha3: 'HTI',
      currencyCodes: ['HTG', 'USD'],
      name: 'Haiti',
      numeric: '332',
    });

    assert.deepEqual(country(at).getCountry('AUS'), country(at).getCountry('036'));
    assert.deepEqual(country(at).getCountry('036'), country(at).getCountry('AU'));
    assert.deepEqual(country(at).getCountry('USA'), country(at).getCountry('840'));
    assert.deepEqual(country(at).getCountry('840'), country(at).getCountry('US'));

    assert.throws(
      () => country(at).getCountry(undefined as unknown as CountryAlpha2),
      /^TypeError: Country not found for code 'undefined'$/u,
    );
    assert.throws(() => country(at).getCountry('' as CountryAlpha2), /^TypeError: Country not found for code ''$/u);
    assert.throws(
      () => country(at).getCountry(840 as unknown as CountryAlpha2),
      /^TypeError: Country not found for code '840'$/u,
    );
    assert.throws(
      () => country(at).getCountry('INVALID' as CountryAlpha2),
      /^TypeError: Country not found for code 'INVALID'$/u,
    );
  });

  it('getCountriesForCurrency will return countries (in sorted order) that use a particular currency', () => {
    assert.deepEqual(country(at).getCountriesForCurrency('JPY'), ['JPN']);
    assert.deepEqual(country(at).getCountriesForCurrency('CAD'), ['CAN']);
    assert.deepEqual(country(at).getCountriesForCurrency('NZD'), ['COK', 'NIU', 'NZL', 'PCN', 'TKL']);
    assert.deepEqual(country(at).getCountriesForCurrency('AUD'), [
      'AUS',
      'CCK',
      'CXR',
      'HMD',
      'KIR',
      'NFK',
      'NRU',
      'TUV',
    ]);
    assert.deepEqual(country(at).getCountriesForCurrency('USD'), [
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
    assert.deepEqual(country(at).getCountriesForCurrency('EUR'), [
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

    assert.deepEqual(country(at).getCountriesForCurrency('XXX'), []);
    assert.deepEqual(country(at).getCountriesForCurrency('' as CurrencyAlphabeticCode), []);
    assert.deepEqual(country(at).getCountriesForCurrency(undefined as unknown as CurrencyAlphabeticCode), []);
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

  it('getCountry  based on alpha2, alpha3 or numeric code will throw an error if we pass any date pre-2018', () => {
    assert.throws(() => {
      country('2017-12-31T23:59:00.000Z').getCountry('HR');
    }, /^TypeError: Lookup functions do not currently support the provided date '2017-12-31T23:59:00.000Z'. Support is available for dates starting from 2018 onwards.$/u);
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

    assert.deepEqual(country(at).getCountry('352'), {
      name: 'Iceland',
      alpha2: 'IS',
      alpha3: 'ISL',
      numeric: '352',
      currencyCodes: ['ISK'],
    });
  });
});
