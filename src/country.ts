// country.ts

/*
 * Copyright (c) 2021 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import countries, { Country, CountryAlpha2, CountryAlpha3, CountryNumeric } from './countries';
import type { CurrencyAlphabeticCode } from './currencies';

export { Country, CountryAlpha2, CountryAlpha3, CountryNumeric } from './countries';

export function allCountries(): Country[] {
  return countries;
}

export function getCountry(code: CountryAlpha2 | CountryAlpha3 | CountryNumeric): Country {
  const country = allCountries().find(
    ({ alpha2, alpha3, numeric }) => code === alpha2 || code === alpha3 || code === numeric
  );
  if (typeof country === 'undefined') {
    // this should not happen unless an invalid string is coerced into the code parameter
    throw Error(`Country not found for code '${code}'`);
  }
  return country;
}

export function getCountriesForCurrency(code: CurrencyAlphabeticCode): CountryAlpha3[] {
  return allCountries()
    .filter(({ currencyCodes }) => currencyCodes.includes(code))
    .map(({ alpha3 }) => alpha3)
    .sort();
}
