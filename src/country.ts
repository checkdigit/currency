// country.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import countries, { type Country, type CountryAlpha2, type CountryAlpha3, type CountryNumeric } from './countries';
import type { CurrencyAlphabeticCode } from './currencies';

export type { Country, CountryAlpha2, CountryAlpha3, CountryNumeric } from './countries';

export function allCountries(): Country[] {
  return countries;
}

export function getCountry(code: CountryAlpha2 | CountryAlpha3 | CountryNumeric): Country {
  const country = allCountries().find(
    ({ alpha2, alpha3, numeric }) => code === alpha2 || code === alpha3 || code === numeric,
  );
  if (country === undefined) {
    // this should not happen unless an invalid string is coerced into the code parameter
    throw new TypeError(`Country not found for code '${code}'`);
  }
  return country;
}

export function getCountriesForCurrency(code: CurrencyAlphabeticCode): CountryAlpha3[] {
  return allCountries()
    .filter(({ currencyCodes }) => currencyCodes.includes(code))
    .map(({ alpha3 }) => alpha3)
    .sort();
}
