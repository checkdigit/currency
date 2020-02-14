// format.ts

import { CurrencyAlphabeticCode, getMinorUnitDigits } from './currency';

export type Amount = string | bigint | -0;

export interface Money {
  amount: Amount;
  currency: CurrencyAlphabeticCode;
}

export interface CurrencyFormatOptions {
  currencyDisplay?: 'code' | 'symbol' | 'name'; // default value 'symbol'
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

  const minorUnitDigits = getMinorUnitDigits(currency);
  const minorUnit = BigInt(10) ** BigInt(minorUnitDigits);
  const minorUnitAmount = (amountInteger < BigInt(0) ? -amountInteger : amountInteger) % minorUnit;

  // this code is required to handle the case of negative zero, since bigints do not support negative zero
  let majorUnitAmount: number | bigint =
    Number(amount) === 0 ? Number(amount) / Number(minorUnit) : amountInteger / minorUnit;

  if (options?.hideDecimal && !(options?.hideCurrency && options?.hideGrouping)) {
    throw Error('hideDecimal can only be true if hideCurrency and hideGrouping are also true');
  }

  if (amountInteger < 0 && majorUnitAmount === BigInt(0)) {
    // since we lose the sign if the major unit amount is zero, need to switch to floating point for negative zero
    majorUnitAmount = -0;
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
            return previous + minorUnitAmount.toString().padStart(minorUnitDigits, '0');
          case 'literal':
            return previous + current.value;
          default:
            // console.log(currency);
            // console.log(`'${current.value}'`);
            // case 'infinity':
            // case 'nan':
            // case 'plusSign':
            // case 'percentSign':
            throw Error(`${current.type} unsupported`);
        }
      }, '')
  );
}

export function getSymbol(currency: CurrencyAlphabeticCode, locales?: string | string[]): string | undefined {
  return Intl.NumberFormat(locales, { style: 'currency', currency })
    .formatToParts(0)
    .filter(part => part.type === 'currency')[0]?.value;
}
