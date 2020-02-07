// index.ts

import { default as iso4217, Iso4217 } from './iso-4217';

export type Amount = string | bigint;
export type Currency = 'USD' | 'JPY';

export interface Money {
  amount: Amount;
  currency: Currency;
}

interface CurrencyFormatOptions {
  hideCurrency?: boolean;
  hideGrouping?: boolean;
  hideDecimal?: boolean;
}

export function format(
  { amount, currency }: Money,
  options?: CurrencyFormatOptions,
  locales?: string | string[]
): string {
  const amountInteger = typeof amount === 'bigint' ? amount : BigInt(amount);

  const majorUnitAmount = amountInteger / BigInt('100');
  const minorUnitAmount = (amountInteger < BigInt(0) ? -amountInteger : amountInteger) % BigInt('100');

  if (options?.hideDecimal && !(options?.hideCurrency && options?.hideGrouping)) {
    throw Error('hideDecimal can only be true if hideCurrency and hideGrouping are also true');
  }

  return (
    Intl.NumberFormat(locales, { style: 'currency', currency })
      // node 12+ supports BigInt as number parameter to formatToParts, but built-in Typescript type currently does not
      .formatToParts((majorUnitAmount as unknown) as number)
      .reduce((previous: string, current) => {
        switch (current.type) {
          case 'minusSign':
            return previous + current.value;
          case 'currency':
            return previous + (options?.hideCurrency ? '' : current.value);
          case 'integer':
            return previous + current.value;
          case 'group':
            return previous + (options?.hideGrouping ? '' : current.value);
          case 'decimal':
            return previous + (options?.hideDecimal ? '' : current.value);
          case 'fraction':
            return previous + minorUnitAmount.toString();
          default:
            throw Error(`${current.type} unsupported`);
        }
      }, '')
  );
}

export function getSymbol(currency: Currency, locales?: string | string[]): string | undefined {
  return Intl.NumberFormat(locales, { style: 'currency', currency })
    .formatToParts(0)
    .filter(part => part.type === 'currency')[0]?.value;
}

export function getMinorUnitDigits(currency: Currency, locales?: string | string[]) {
  return (
    Intl.NumberFormat(locales, { style: 'currency', currency })
      .formatToParts(0)
      .filter(part => part.type === 'fraction')[0]?.value.length ?? 0
  );
}

export function getIso4217Codes(): Iso4217[] {
  return iso4217;
}