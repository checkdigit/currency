// parse.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyLibrary, { type CurrencyAlphabeticCode } from './currency.ts';
import countryLibrary from './country.ts';

import type { Money } from './money.ts';

export interface ParseLibrary {
  parse: (
    money: string,
    currency: CurrencyAlphabeticCode,
    locales?: string | string[],
  ) => Money;
}

export default function (at: string): ParseLibrary {
  const currencyLibraryAt = currencyLibrary(at);
  const countryLibraryAt = countryLibrary(at);
  return {
    parse(money, currencyCode, locales) {
      const parts = Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currencyCode,
        // eslint-disable-next-line no-magic-numbers
      }).formatToParts(1_234_567.89);

      const currencySymbol = parts.find(
        (part) => part.type === 'currency',
      )?.value;
      const groupSymbol = parts.find((part) => part.type === 'group')?.value;
      const decimalSymbol =
        parts.find((part) => part.type === 'decimal')?.value ?? '.';
      const numerals = new Intl.NumberFormat(locales, { useGrouping: false })
        // eslint-disable-next-line unicorn/numeric-separators-style,no-magic-numbers
        .format(9876543210)
        // eslint-disable-next-line unicorn/prefer-spread
        .split('')
        .toReversed()
        .join('');
      const numeralRegex = new RegExp(`[${numerals}]`, 'gu');
      const currency = currencyLibraryAt.getCurrency(currencyCode);
      const countries = countryLibraryAt
        .getCountriesForCurrency(currencyCode)
        .map(countryLibraryAt.getCountry);
      const minorUnitDigits =
        currencyLibraryAt.getMinorUnitDigits(currencyCode);

      if (currencySymbol === undefined) {
        throw new Error('currencySymbol undefined');
      }

      if (groupSymbol === undefined) {
        throw new Error('groupSymbol undefined');
      }

      let amount = money
        .trim()
        .toLocaleLowerCase(locales)
        .replaceAll(groupSymbol.toLocaleLowerCase(locales), '')
        .replace(currencySymbol.toLocaleLowerCase(locales), '')
        .replace(currency.name.toLocaleLowerCase(locales), '')
        .replace(currency.alphabeticCode.toLocaleLowerCase(locales), '')
        .replace(decimalSymbol.toLocaleLowerCase(locales), '.')
        // matches a minus sign (normal or “fancy”),
        // plus an optional space right after it.
        .replace(/[−-]\s?/u, '-')
        .replace(numeralRegex, (group: string) =>
          numerals.indexOf(group).toString(),
        );

      for (const country of countries) {
        amount = amount.replace(country.alpha2.toLocaleLowerCase(locales), '');
      }

      const decimalPlaces = amount.includes('.')
        ? amount.length - amount.indexOf('.') - 1
        : 0;

      if (decimalPlaces > minorUnitDigits) {
        throw new Error('decimalPlaces > minorUnitDigits');
      }

      amount = amount.replaceAll('.', '');
      amount = amount.slice(
        0,
        amount.length - (decimalPlaces - minorUnitDigits),
      );

      if (decimalPlaces < minorUnitDigits) {
        amount += '0'.repeat(minorUnitDigits - decimalPlaces);
      }

      try {
        return {
          amount: BigInt(amount),
          currency: currencyCode,
        };
      } catch (error) {
        throw new Error(`Cannot parse "${money}"`, { cause: error });
      }
    },
  };
}
