// currency.ts

/*
 * Copyright (c) 2021-2026 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyOperations, {
  type Currency,
  type CurrencyAlphabeticCode,
  type CurrencyNumericCode,
} from './currencies.ts';
import { getItemsFromOperations } from './operation.ts';

export type {
  Currency,
  CurrencyAlphabeticCode,
  CurrencyNumericCode,
  CurrencyName,
} from './currencies.ts';

/*
 * ISO 4217 can assign the same display name to multiple currency codes.
 * Keep the preferred name lookup explicit so it does not depend on operation
 * insertion order.
 */
const canonicalCurrencyCodesByName = {
  'Bolívar Soberano': 'VES',
  Leone: 'SLE',
} as const satisfies Partial<Record<Currency['name'], CurrencyAlphabeticCode>>;

export interface CurrencyLibrary {
  allCurrencies: () => Currency[];
  findCurrency: (search: string | number) => Currency;
  getCurrency: (code: CurrencyAlphabeticCode | CurrencyNumericCode) => Currency;
  getMinorUnitDigits: (currencyCode: CurrencyAlphabeticCode) => number;
  getSymbol: (
    currencyCode: CurrencyAlphabeticCode,
    locales?: string | string[],
  ) => string | undefined;
}
export default function (at: string): CurrencyLibrary {
  const currencies = getItemsFromOperations(currencyOperations, at);

  const currencyMap = new Map<string | number, Currency>();
  for (const currency of currencies) {
    currencyMap.set(currency.alphabeticCode, currency);
    currencyMap.set(currency.numericCode, currency);
    currencyMap.set(currency.name.toUpperCase(), currency);
  }

  // Apply a preference only when that code exists at the requested time.
  for (const [name, code] of Object.entries(canonicalCurrencyCodesByName)) {
    const canonicalCurrency = currencyMap.get(code);
    if (canonicalCurrency?.name === name) {
      currencyMap.set(name.toUpperCase(), canonicalCurrency);
    }
  }

  const currencyLibrary = {
    allCurrencies: () => currencies,
    findCurrency(search: string | number) {
      const normalizedSearch = String(search).trim().toUpperCase();
      const currency = currencyMap.get(normalizedSearch);

      if (currency === undefined) {
        throw new Error(`Currency not found for '${search}'`);
      }

      return currency;
    },
    getCurrency: (code: CurrencyAlphabeticCode | CurrencyNumericCode) => {
      const currency = currencyMap.get(code);

      if (currency === undefined) {
        throw new TypeError(`Currency not found for code '${code}'`);
      }

      return currency;
    },
    getMinorUnitDigits: (currency: CurrencyAlphabeticCode) =>
      currencyLibrary.getCurrency(currency).minorUnits ?? 2,
    getSymbol: (
      currency: CurrencyAlphabeticCode,
      locales?: string | string[],
    ) =>
      new Intl.NumberFormat(locales, { style: 'currency', currency })
        .formatToParts(0)
        .find((part) => part.type === 'currency')?.value,
  };
  return currencyLibrary;
}
