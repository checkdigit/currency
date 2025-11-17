// currencies.test.ts

import currencyLibrary, {
  type Currency,
  type CurrencyAlphabeticCode,
} from './index.ts';

export function getFewCurrencies(
  at: string = new Date().toISOString(),
): Currency[] {
  const { getCurrency } = currencyLibrary(at);
  return (['USD', 'EUR', 'JPY'] satisfies CurrencyAlphabeticCode[]).map(
    (currency) => getCurrency(currency),
  );
}

export function getManyCurrencies(
  at: string = new Date().toISOString(),
): Currency[] {
  const { getCurrency } = currencyLibrary(at);
  return (['USD', 'EUR', 'JPY'] satisfies CurrencyAlphabeticCode[]).map(
    (currency) => getCurrency(currency),
  );
}

export function getAllCurrencies(
  at: string = new Date().toISOString(),
): Currency[] {
  const { allCurrencies } = currencyLibrary(at);
  return allCurrencies();
}
