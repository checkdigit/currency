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
  return (
    [
      'USD',
      'EUR',
      'JPY',
      'GBP',
      'AUD',
      'NZD',
      'CAD',
      'CHF',
      'CNY',
      'HKD',
      'SEK',
      'MXN',
      'SGD',
      'NOK',
      'KRW',
      'TRY',
      'INR',
      'RUB',
      'BRL',
      'ZAR',
      'DKK',
      'PLN',
      'TWD',
      'THB',
      'MYR',
    ] satisfies CurrencyAlphabeticCode[]
  ).map((currency) => getCurrency(currency));
}

export function getAllCurrencies(
  at: string = new Date().toISOString(),
): Currency[] {
  const { allCurrencies } = currencyLibrary(at);
  return allCurrencies();
}

/**
 * Returns currencies whose Intl.NumberFormat fraction digits do not match
 * their ISO 4217 minor units.
 */
export function getUnsupportedCurrencies(
  at: string = new Date().toISOString(),
): Currency[] {
  const { getCurrency } = currencyLibrary(at);
  return (
    [
      'AFN',
      'ALL',
      'COP',
      'HUF',
      'IDR',
      'IRR',
      'IQD',
      'KPW',
      'LAK',
      'LBP',
      'MGA',
      'MMK',
      'PKR',
      'SLL',
      'SOS',
      'SYP',
      'YER',
    ] satisfies CurrencyAlphabeticCode[]
  ).map((currency) => getCurrency(currency));
}
