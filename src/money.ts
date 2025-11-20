// money.ts

import type { CurrencyAlphabeticCode } from './currencies.ts';

export interface Money {
  amount: string;
  currency: CurrencyAlphabeticCode;
}
