// country.spec.ts

/*
 * Copyright (c) 2021-2026 Check Digit, LLC
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
    assert.equal(allCountries().length, 249);
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

    assert.deepEqual(getCountry('AQ'), {
      alpha2: 'AQ',
      alpha3: 'ATA',
      currencyCodes: ['XXX'],
      name: 'Antarctica',
      numeric: '010',
    });

    assert.deepEqual(getCountry('FLK'), {
      alpha2: 'FK',
      alpha3: 'FLK',
      currencyCodes: ['FKP'],
      name: 'Falkland Islands (the) [Malvinas]',
      numeric: '238',
    });

    assert.deepEqual(getCountry('239'), {
      alpha2: 'GS',
      alpha3: 'SGS',
      currencyCodes: ['GBP'],
      name: 'South Georgia and the South Sandwich Islands',
      numeric: '239',
    });

    assert.deepEqual(getCountry('BG'), {
      alpha2: 'BG',
      alpha3: 'BGR',
      currencyCodes: ['EUR'],
      name: 'Bulgaria',
      numeric: '100',
    });

    assert.deepEqual(getCountry('CU'), {
      alpha2: 'CU',
      alpha3: 'CUB',
      currencyCodes: ['CUP'],
      name: 'Cuba',
      numeric: '192',
    });

    assert.deepEqual(getCountry('CW'), {
      alpha2: 'CW',
      alpha3: 'CUW',
      currencyCodes: ['XCG'],
      name: 'Cura\u{E7}ao',
      numeric: '531',
    });

    assert.deepEqual(getCountry('SL'), {
      alpha2: 'SL',
      alpha3: 'SLE',
      currencyCodes: ['SLE'],
      name: 'Sierra Leone',
      numeric: '694',
    });

    assert.deepEqual(getCountry('SX'), {
      alpha2: 'SX',
      alpha3: 'SXM',
      currencyCodes: ['XCG'],
      name: 'Sint Maarten',
      numeric: '534',
    });

    assert.deepEqual(getCountry('ZW'), {
      alpha2: 'ZW',
      alpha3: 'ZWE',
      currencyCodes: ['ZWG'],
      name: 'Zimbabwe',
      numeric: '716',
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
    assert.deepEqual(getCountriesForCurrency('FKP'), ['FLK']);
    assert.deepEqual(getCountriesForCurrency('GBP'), [
      'GBR',
      'GGY',
      'IMN',
      'JEY',
      'SGS',
    ]);
    assert.deepEqual(getCountriesForCurrency('SLE'), ['SLE']);
    assert.deepEqual(getCountriesForCurrency('XCG'), ['CUW', 'SXM']);
    assert.deepEqual(getCountriesForCurrency('ZWG'), ['ZWE']);
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
      'BGR',
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

    assert.deepEqual(getCountriesForCurrency('XXX'), ['ATA']);
    assert.deepEqual(getCountriesForCurrency('ANG'), []);
    assert.deepEqual(getCountriesForCurrency('BGN'), []);
    assert.deepEqual(getCountriesForCurrency('CUC'), []);
    assert.deepEqual(getCountriesForCurrency('SLL'), []);
    assert.deepEqual(getCountriesForCurrency('ZWL'), []);
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
    assert.deepEqual(country('2021-06-30T23:59:59.999Z').getCountry('CU'), {
      name: 'Cuba',
      alpha2: 'CU',
      alpha3: 'CUB',
      numeric: '192',
      currencyCodes: ['CUP', 'CUC'],
    });

    assert.deepEqual(country('2022-06-30T23:59:59.999Z').getCountry('SL'), {
      name: 'Sierra Leone',
      alpha2: 'SL',
      alpha3: 'SLE',
      numeric: '694',
      currencyCodes: ['SLL'],
    });

    assert.deepEqual(country('2024-06-24T23:59:59.999Z').getCountry('ZW'), {
      name: 'Zimbabwe',
      alpha2: 'ZW',
      alpha3: 'ZWE',
      numeric: '716',
      currencyCodes: ['ZWL'],
    });

    assert.deepEqual(country('2025-03-30T23:59:59.999Z').getCountry('CW'), {
      name: 'Cura\u{E7}ao',
      alpha2: 'CW',
      alpha3: 'CUW',
      numeric: '531',
      currencyCodes: ['ANG'],
    });

    assert.deepEqual(country('2025-12-31T23:59:59.999Z').getCountry('BG'), {
      name: 'Bulgaria',
      alpha2: 'BG',
      alpha3: 'BGR',
      numeric: '100',
      currencyCodes: ['BGN'],
    });

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

  it('includes both currencies during redenomination transition periods', () => {
    const sierraLeoneDuringTransition = country('2022-07-01T00:00:00.001Z');
    assert.deepEqual(sierraLeoneDuringTransition.getCountry('SL'), {
      name: 'Sierra Leone',
      alpha2: 'SL',
      alpha3: 'SLE',
      numeric: '694',
      currencyCodes: ['SLE', 'SLL'],
    });
    assert.deepEqual(
      sierraLeoneDuringTransition.getCountriesForCurrency('SLL'),
      ['SLE'],
    );
    assert.deepEqual(
      sierraLeoneDuringTransition.getCountriesForCurrency('SLE'),
      ['SLE'],
    );
    for (const transitionDate of [
      '2022-10-01T00:00:00.001Z',
      '2023-07-01T00:00:00.000Z',
      '2023-12-31T23:59:59.999Z',
    ]) {
      const sierraLeoneDuringExtendedTransition = country(transitionDate);
      assert.deepEqual(
        sierraLeoneDuringExtendedTransition.getCountry('SL').currencyCodes,
        ['SLE', 'SLL'],
      );
      assert.deepEqual(
        sierraLeoneDuringExtendedTransition.getCountriesForCurrency('SLL'),
        ['SLE'],
      );
    }

    const sierraLeoneAfterTransition = country('2024-01-01T00:00:00.001Z');
    assert.deepEqual(
      sierraLeoneAfterTransition.getCountry('SL').currencyCodes,
      ['SLE'],
    );
    assert.deepEqual(
      sierraLeoneAfterTransition.getCountriesForCurrency('SLL'),
      [],
    );

    const zimbabweDuringTransition = country('2024-06-25T00:00:00.001Z');
    assert.deepEqual(zimbabweDuringTransition.getCountry('ZW'), {
      name: 'Zimbabwe',
      alpha2: 'ZW',
      alpha3: 'ZWE',
      numeric: '716',
      currencyCodes: ['ZWG', 'ZWL'],
    });
    assert.deepEqual(zimbabweDuringTransition.getCountriesForCurrency('ZWL'), [
      'ZWE',
    ]);
    assert.deepEqual(zimbabweDuringTransition.getCountriesForCurrency('ZWG'), [
      'ZWE',
    ]);
    assert.deepEqual(
      country('2024-08-31T23:59:59.999Z').getCountry('ZW').currencyCodes,
      ['ZWG', 'ZWL'],
    );

    const zimbabweAfterTransition = country('2024-09-01T00:00:00.001Z');
    assert.deepEqual(zimbabweAfterTransition.getCountry('ZW').currencyCodes, [
      'ZWG',
    ]);
    assert.deepEqual(
      zimbabweAfterTransition.getCountriesForCurrency('ZWL'),
      [],
    );
  });
});
