// format.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyLibrary, { type CurrencyAlphabeticCode } from './currency.ts';

export type Amount = string | bigint | -0;

export interface Money {
  amount: Amount;
  currency: CurrencyAlphabeticCode;
}

export interface CurrencyFormatOptions
  extends Pick<Intl.NumberFormatOptions, 'useGrouping'> {
  currencyDisplay?: 'code' | 'symbol' | 'name';
  useCurrency?: boolean;
  useDecimal?: boolean;
}

export const defaultCurrencyFormatOptions: Required<CurrencyFormatOptions> =
  Object.freeze({
    currencyDisplay: 'symbol',
    useCurrency: true,
    useGrouping: true,
    useDecimal: true,
  });

export interface FormatLibrary {
  format: (
    { amount, currency }: Money,
    options?: CurrencyFormatOptions,
    locales?: string | string[],
  ) => string;

  parse: (
    money: string,
    currency: CurrencyAlphabeticCode,
    locales?: string | string[],
  ) => Money;
}

export default function (at: string): FormatLibrary {
  return {
    format({ amount, currency }: Money, options, locales) {
      const resolvedOptions: Required<CurrencyFormatOptions> = {
        ...defaultCurrencyFormatOptions,
        ...options,
      };
      const amountInteger =
        typeof amount === 'bigint' ? amount : BigInt(amount);
      const minorUnitDigits = currencyLibrary(at).getMinorUnitDigits(currency);
      const minorUnit = 10n ** BigInt(minorUnitDigits);

      /*
       * Calculate the minor unit amount,
       * while also handling locales that use different digit symbols than 0 through 9.
       */
      const minorUnitAmount = Intl.NumberFormat(locales, { useGrouping: false })
        .format(
          Number(
            (amountInteger < BigInt(0) ? -amountInteger : amountInteger) %
              minorUnit,
          ),
        )
        .padStart(
          minorUnitDigits,
          Intl.NumberFormat(locales, { useGrouping: false }).format(0),
        );

      // this code is required to handle the case of negative zero,
      // since BigInts do not support negative zero
      let majorUnitAmount: number | bigint =
        Number(amount) === 0
          ? Number(amount) / Number(minorUnit)
          : amountInteger / minorUnit;

      if (
        !resolvedOptions.useDecimal &&
        !(!resolvedOptions.useCurrency && resolvedOptions.useGrouping !== true)
      ) {
        throw new Error(
          'useDecimal can only be false if useCurrency and useGrouping are also false',
        );
      }

      if (amountInteger < 0 && majorUnitAmount === BigInt(0)) {
        // since we lose the sign if the major unit amount is zero, need to switch to floating point for negative zero
        majorUnitAmount = -0;
      }

      return Intl.NumberFormat(locales, {
        style: 'currency',
        currency,
        useGrouping: resolvedOptions.useGrouping,
        currencyDisplay: resolvedOptions.currencyDisplay,
      })
        .formatToParts(majorUnitAmount)
        .filter(
          ({ type }) =>
            (type !== 'currency' || resolvedOptions.useCurrency) &&
            (type !== 'decimal' || resolvedOptions.useDecimal),
        )
        .map((part) =>
          part.type === 'fraction' ? minorUnitAmount : part.value,
        )
        .join('');
    },

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
