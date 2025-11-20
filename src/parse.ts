// parse.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyLibrary, { type CurrencyAlphabeticCode } from './currency.ts';
import countryLibrary from './country.ts';

import type { Money } from './money.ts';

/**
 * Parsing library for monetary amounts.
 */
export interface ParseLibrary {
  parse: (
    money: string,
    currency: CurrencyAlphabeticCode,
    locales?: string | string[],
  ) => Money;
}

/**
 * Creates a parsing library for monetary amounts.
 * @param at - the time at which to load the currency and country data
 */
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

      const simpleParts = Intl.NumberFormat(locales, {
        style: 'currency',
        currency: currencyCode,
        currencyDisplay: 'narrowSymbol',
        // eslint-disable-next-line no-magic-numbers
      }).formatToParts(1_234_567.89);
      const simpleCurrencySymbol = simpleParts.find(
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

      // normalize input
      let amount = money.trim().toLocaleLowerCase(locales);

      // remove group symbol
      if (groupSymbol !== undefined) {
        amount = amount.replaceAll(groupSymbol.toLocaleLowerCase(locales), '');
      }

      // remove currency symbol
      if (currencySymbol !== undefined) {
        amount = amount.replaceAll(
          currencySymbol.toLocaleLowerCase(locales),
          '',
        );
      }

      // replace decimal symbol with a dot
      amount = amount.replace(decimalSymbol.toLocaleLowerCase(locales), '.');

      // remove simple currency symbol
      if (simpleCurrencySymbol !== undefined) {
        amount = amount.replaceAll(
          simpleCurrencySymbol.toLocaleLowerCase(locales),
          '',
        );
      }

      // remove currency name
      amount = amount.replace(currency.name.toLocaleLowerCase(locales), '');

      // remove currency code
      amount = amount.replace(
        currency.alphabeticCode.toLocaleLowerCase(locales),
        '',
      );

      // matches a minus sign (normal or “fancy”), plus an optional space right after it.
      amount = amount.replace(/[−-]\s?/u, '-');

      // replace localized numerals with Western Arabic numerals
      amount = amount.replace(numeralRegex, (group: string) =>
        numerals.indexOf(group).toString(),
      );

      // remove country codes
      for (const country of countries) {
        amount = amount.replace(country.alpha2.toLocaleLowerCase(locales), '');
      }

      // replace all non-numeric characters except minus sign and decimal point
      amount = amount.replaceAll(/[^0-9.-]/gu, '');

      // ensure at least one digit is present
      if (!/\d/u.test(amount)) {
        throw new RangeError(`Cannot parse "${money}"`);
      }

      // move minus sign to the front if it's at the end
      if (amount.endsWith('-')) {
        amount = `-${amount.slice(0, -1)}`;
      }

      // validate decimal places
      const decimalPlaces = amount.includes('.')
        ? amount.length - amount.indexOf('.') - 1
        : 0;

      // ensure not too many decimal places
      if (decimalPlaces > minorUnitDigits) {
        throw new Error(
          `Too many decimal places (${decimalPlaces} - maximum ${minorUnitDigits}), in "${money}"`,
        );
      }

      // normalize to minor units
      amount = amount.replaceAll('.', '');
      amount = amount.slice(
        0,
        amount.length - (decimalPlaces - minorUnitDigits),
      );

      // pad with zeros if needed
      if (decimalPlaces < minorUnitDigits) {
        amount += '0'.repeat(minorUnitDigits - decimalPlaces);
      }

      const numericAmount = BigInt(amount);
      const isNegativeZero = numericAmount === 0n && amount.startsWith('-');

      return {
        amount: isNegativeZero ? '-0' : numericAmount.toString(),
        currency: currencyCode,
      };
    },
  };
}
