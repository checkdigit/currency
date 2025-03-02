// currency.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import {
  type Currency,
  type CurrencyAlphabeticCode,
  type CurrencyNumericCode,
  default as currencyOperations,
} from './currencies.ts';
import { getItemsFromOperations } from './operation.ts';

export type { Currency, CurrencyAlphabeticCode, CurrencyNumericCode, CurrencyName } from './currencies.ts';

export interface CurrencyLibrary {
  allCurrencies: () => Currency[];
  getCurrency: (code: CurrencyAlphabeticCode | CurrencyNumericCode) => Currency;
  getMinorUnitDigits: (currencyCode: CurrencyAlphabeticCode) => number;
  getSymbol: (currencyCode: CurrencyAlphabeticCode, locales?: string | string[]) => string | undefined;
}
export default function (at: string): CurrencyLibrary {
  const currencies = getItemsFromOperations(currencyOperations, at);
  const currencyLibrary = {
    allCurrencies: () => currencies,
    getCurrency: (code: CurrencyAlphabeticCode | CurrencyNumericCode) => {
      const currency = currencies.find(
        ({ alphabeticCode, numericCode }) => code === alphabeticCode || code === numericCode,
      );

      if (currency === undefined) {
        throw new TypeError(`Currency not found for code '${code}'`);
      }

      return currency;
    },
    getMinorUnitDigits: (currency: CurrencyAlphabeticCode) => currencyLibrary.getCurrency(currency).minorUnits ?? 2,
    getSymbol: (currency: CurrencyAlphabeticCode, locales?: string | string[]) =>
      Intl.NumberFormat(locales, { style: 'currency', currency })
        .formatToParts(0)
        .find((part) => part.type === 'currency')?.value,
  };
  return currencyLibrary;
}
