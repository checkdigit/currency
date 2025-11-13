// money.ts

import type { CurrencyAlphabeticCode } from './currencies.ts';

export type Amount = string | bigint | -0;

export interface Money {
  amount: Amount;
  currency: CurrencyAlphabeticCode;
}
