// country.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import countryOperations, {
  type Country,
  type CountryAlpha2,
  type CountryAlpha3,
  type CountryNumeric,
} from './countries.ts';
import type { CurrencyAlphabeticCode } from './currencies.ts';
import { getItemsFromOperations } from './operation.ts';

export type {
  Country,
  CountryAlpha2,
  CountryAlpha3,
  CountryNumeric,
} from './countries.ts';

export interface CountryLibrary {
  allCountries: () => Country[];
  // eslint-disable-next-line sonarjs/use-type-alias
  getCountry: (code: CountryAlpha2 | CountryAlpha3 | CountryNumeric) => Country;
  getCountriesForCurrency: (code: CurrencyAlphabeticCode) => CountryAlpha3[];
}

export default function (at: string): CountryLibrary {
  const countries = getItemsFromOperations(countryOperations, at);

  const getCountriesForCurrencyMap = new Map<
    CurrencyAlphabeticCode,
    CountryAlpha3[]
  >();
  for (const country of countries) {
    for (const currencyCode of country.currencyCodes) {
      getCountriesForCurrencyMap.set(
        currencyCode,
        [
          ...(getCountriesForCurrencyMap.get(currencyCode) ?? []),
          country.alpha3,
        ].sort((countryA, countryB) => countryA.localeCompare(countryB)),
      );
    }
  }

  const getCountryMap = new Map<
    CountryAlpha2 | CountryAlpha3 | CountryNumeric,
    Country
  >();
  for (const country of countries) {
    getCountryMap.set(country.alpha2, country);
    getCountryMap.set(country.alpha3, country);
    getCountryMap.set(country.numeric, country);
  }

  return {
    allCountries: () => countries,
    getCountry: (code: CountryAlpha2 | CountryAlpha3 | CountryNumeric) => {
      const country = getCountryMap.get(code);
      if (country === undefined) {
        // this should not happen unless an invalid string is coerced into the code parameter
        throw new TypeError(`Country not found for code '${code}'`);
      }
      return country;
    },

    getCountriesForCurrency: (code: CurrencyAlphabeticCode) =>
      getCountriesForCurrencyMap.get(code) ?? [],
  };
}
