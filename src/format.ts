// format.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { type CurrencyAlphabeticCode, default as currencyLibrary } from './currency';

export type Amount = string | bigint | -0;

export interface Money {
  amount: Amount;
  currency: CurrencyAlphabeticCode;
}

export interface CurrencyFormatOptions extends Pick<Intl.NumberFormatOptions, 'useGrouping'> {
  currencyDisplay?: 'code' | 'symbol' | 'name';
  useCurrency?: boolean;
  useDecimal?: boolean;
}

export const defaultCurrencyFormatOptions: Required<CurrencyFormatOptions> = Object.freeze({
  currencyDisplay: 'symbol',
  useCurrency: true,
  useGrouping: true,
  useDecimal: true,
});

export interface FormatLibrary {
  format: ({ amount, currency }: Money, options?: CurrencyFormatOptions, locales?: string | string[]) => string;
}

export default function (at: string): FormatLibrary {
  return {
    format: ({ amount, currency }: Money, options?: CurrencyFormatOptions, locales?: string | string[]) => {
      const resolvedOptions: Required<CurrencyFormatOptions> = { ...defaultCurrencyFormatOptions, ...options };
      const amountInteger = typeof amount === 'bigint' ? amount : BigInt(amount);
      const minorUnitDigits = currencyLibrary(at).getMinorUnitDigits(currency);
      const minorUnit = 10n ** BigInt(minorUnitDigits);

      /*
       * Calculate the minor unit amount, while also handling locales that use different digit symbols than 0 thru 9.
       */
      const minorUnitAmount = Intl.NumberFormat(locales, { useGrouping: false })
        .format(Number((amountInteger < BigInt(0) ? -amountInteger : amountInteger) % minorUnit))
        .padStart(minorUnitDigits, Intl.NumberFormat(locales, { useGrouping: false }).format(0));

      // this code is required to handle the case of negative zero, since bigints do not support negative zero
      let majorUnitAmount: number | bigint =
        Number(amount) === 0 ? Number(amount) / Number(minorUnit) : amountInteger / minorUnit;

      if (!resolvedOptions.useDecimal && !(!resolvedOptions.useCurrency && resolvedOptions.useGrouping !== true)) {
        throw new Error('useDecimal can only be false if useCurrency and useGrouping are also false');
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
            (type !== 'currency' || resolvedOptions.useCurrency) && (type !== 'decimal' || resolvedOptions.useDecimal),
        )
        .map((part) => (part.type === 'fraction' ? minorUnitAmount : part.value))
        .join('');
    },
  };
}
