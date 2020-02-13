// currency.ts

import { default as currencies, Currency, CurrencyAlphabeticCode, CurrencyNumericCode } from './currencies';

export { Currency, CurrencyAlphabeticCode, CurrencyNumericCode, CurrencyName } from './currencies';

export function find(code: CurrencyAlphabeticCode | CurrencyNumericCode): Currency {
  const currency = currencies.find(
    ({ alphabeticCode, numericCode }) => code === alphabeticCode || code === numericCode
  );
  if (typeof currency === 'undefined') {
    // this should not happen unless an invalid string is coerced into the code parameter
    throw Error(`Currency not found for code '${code}'`);
  }
  return currency;
}

export function getMinorUnitDigits(currency: CurrencyAlphabeticCode) {
  return find(currency).minorUnits;
}
