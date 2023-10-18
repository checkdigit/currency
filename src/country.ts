// country.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import {
  type Country,
  type CountryAlpha2,
  type CountryAlpha3,
  type CountryNumeric,
  default as countryOperations,
} from './countries';
import type { CurrencyAlphabeticCode } from './currencies';
import { getItemsFromOperations } from './operation';

export type { Country, CountryAlpha2, CountryAlpha3, CountryNumeric } from './countries';

export default function (at: string): {
  allCountries: () => Country[];
  getCountry: (code: CountryAlpha2 | CountryAlpha3 | CountryNumeric) => Country;
  getCountriesForCurrency: (code: CurrencyAlphabeticCode) => CountryAlpha3[];
} {
  const countries = getItemsFromOperations(countryOperations, at);
  return {
    allCountries: () => countries,
    getCountry: (code: CountryAlpha2 | CountryAlpha3 | CountryNumeric) => {
      const country = countries.find(
        ({ alpha2, alpha3, numeric }) => code === alpha2 || code === alpha3 || code === numeric,
      );
      if (country === undefined) {
        // this should not happen unless an invalid string is coerced into the code parameter
        throw new TypeError(`Country not found for code '${code}'`);
      }
      return country;
    },
    getCountriesForCurrency: (code: CurrencyAlphabeticCode) =>
      countries
        .filter(({ currencyCodes }) => currencyCodes.includes(code))
        .map(({ alpha3 }) => alpha3)
        .sort(),
  };
}
