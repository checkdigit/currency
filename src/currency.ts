// currency.ts

/*
 * Copyright (c) 2021 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { default as currencies, Currency, CurrencyAlphabeticCode, CurrencyNumericCode } from './currencies';

export { Currency, CurrencyAlphabeticCode, CurrencyNumericCode, CurrencyName } from './currencies';

export function allCurrencies(): Currency[] {
  return currencies;
}

export function getCurrency(code: CurrencyAlphabeticCode | CurrencyNumericCode): Currency {
  const currency = allCurrencies().find(
    ({ alphabeticCode, numericCode }) => code === alphabeticCode || code === numericCode
  );
  if (typeof currency === 'undefined') {
    // this should not happen unless an invalid string is coerced into the code parameter
    throw Error(`Currency not found for code '${code}'`);
  }
  return currency;
}

export function getMinorUnitDigits(currency: CurrencyAlphabeticCode): number {
  return getCurrency(currency).minorUnits ?? 2;
}

export function getSymbol(currency: CurrencyAlphabeticCode, locales?: string | string[]): string | undefined {
  return Intl.NumberFormat(locales, { style: 'currency', currency })
    .formatToParts(0)
    .filter((part) => part.type === 'currency')[0]?.value;
}
