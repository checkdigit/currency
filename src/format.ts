// format.ts

/*
 * Copyright (c) 2021-2026 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencyLibrary from './currency.ts';
import type { Money } from './money.ts';

export interface CurrencyFormatOptions extends Pick<
  Intl.NumberFormatOptions,
  'useGrouping'
> {
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
}

export default function (at: string): FormatLibrary {
  const { getMinorUnitDigits } = currencyLibrary(at);
  return {
    format({ amount, currency }: Money, options, locales) {
      const resolvedOptions: Required<CurrencyFormatOptions> = {
        ...defaultCurrencyFormatOptions,
        ...options,
      };

      if (
        !resolvedOptions.useDecimal &&
        (resolvedOptions.useCurrency || resolvedOptions.useGrouping === true)
      ) {
        throw new Error(
          'useDecimal can only be false if useCurrency and useGrouping are also false',
        );
      }

      const amountInteger = BigInt(amount);
      const minorUnitDigits = getMinorUnitDigits(currency);
      const minorUnit = 10n ** BigInt(minorUnitDigits);

      /*
       * Calculate the minor unit amount,
       * while also handling locales that use different digit symbols than 0 through 9.
       */
      const minorUnitAmount = new Intl.NumberFormat(locales, {
        useGrouping: false,
      })
        .format(
          Number(
            (amountInteger < 0n ? -amountInteger : amountInteger) % minorUnit,
          ),
        )
        .padStart(
          minorUnitDigits,
          new Intl.NumberFormat(locales, { useGrouping: false }).format(0),
        );

      // this code is required to handle the case of negative zero,
      // since BigInts do not support negative zero
      let majorUnitAmount: number | bigint =
        Number(amount) === 0
          ? Number(amount) / Number(minorUnit)
          : amountInteger / minorUnit;

      if (majorUnitAmount === 0n && amountInteger < 0n) {
        // since we lose the sign if the major unit amount is zero, need to switch to floating point for negative zero
        majorUnitAmount = -0;
      }

      /*
       * CLDR fraction-digit defaults differ from ISO 4217 for some currencies.
       * Force Intl to emit a fraction part so it can be replaced below with the
       * exact minor-unit value calculated without floating-point arithmetic.
       */
      return new Intl.NumberFormat(locales, {
        style: 'currency',
        currency,
        useGrouping: resolvedOptions.useGrouping,
        currencyDisplay: resolvedOptions.currencyDisplay,
        minimumFractionDigits: minorUnitDigits,
        maximumFractionDigits: minorUnitDigits,
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
  };
}
