// country.spec.ts

import * as assert from 'assert';

import { allCountries, CountryAlpha2, getCountry } from './index';

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
      numeric: '840'
    });

    assert.deepStrictEqual(getCountry('NZ'), {
      alpha2: 'NZ',
      alpha3: 'NZL',
      currencyCodes: ['NZD'],
      name: 'New Zealand',
      numeric: '554'
    });

    assert.deepStrictEqual(getCountry('332'), {
      alpha2: 'HT',
      alpha3: 'HTI',
      currencyCodes: ['HTG', 'USD'],
      name: 'Haiti',
      numeric: '332'
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
});
