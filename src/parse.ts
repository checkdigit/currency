// parse.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyLibrary, { type CurrencyAlphabeticCode } from './currency.ts';

import type { Money } from './money.ts';

export interface ParseLibrary {
  parse: (
    money: string,
    currency: CurrencyAlphabeticCode,
    locales?: string | string[],
  ) => Money;
}

export default function (at: string): ParseLibrary {
  return {
    parse(money, currency, locales) {
      // eslint-disable-next-line no-magic-numbers
      const parts = Intl.NumberFormat(locales).formatToParts(1111.11);
      const groupSymbol = parts.find((part) => part.type === 'group')?.value;
      const decimalSymbol = parts.find(
        (part) => part.type === 'decimal',
      )?.value;
      const numerals = new Intl.NumberFormat(locales, { useGrouping: false })
        // eslint-disable-next-line unicorn/numeric-separators-style,no-magic-numbers
        .format(9876543210)
        // eslint-disable-next-line unicorn/prefer-spread
        .split('')
        .toReversed()
        .join('');
      const numeralRegex = new RegExp(`[${numerals}]`, 'gu');

      if (groupSymbol === undefined) {
        throw new Error('groupSymbol undefined');
      }

      if (decimalSymbol === undefined) {
        throw new Error('decimalSymbol undefined');
      }

      let amount = money
        .replaceAll(groupSymbol, '')
        .replace(decimalSymbol, '.')
        // matches a minus sign (normal or “fancy”),
        // plus an optional space right after it.
        .replace(/[−-]\s?/u, '-')
        .replace(numeralRegex, (group: string) =>
          numerals.indexOf(group).toString(),
        )
        // remove anything that isn't a digit, "." or "-"
        .replaceAll(/[^0-9.-]/gu, '');

      const minorUnitDigits = currencyLibrary(at).getMinorUnitDigits(currency);

      const decimalPlaces = amount.includes('.')
        ? amount.length - amount.indexOf('.') - 1
        : 0;

      amount = amount.replaceAll('.', '');

      amount = amount.slice(
        0,
        amount.length - (decimalPlaces - minorUnitDigits),
      );

      if (decimalPlaces > minorUnitDigits) {
        throw new Error('decimalPlaces > minorUnitDigits');
      }

      if (decimalPlaces < minorUnitDigits) {
        amount += '0'.repeat(minorUnitDigits - decimalPlaces);
      }

      return {
        amount: BigInt(amount),
        currency,
      };
    },
  };
}
