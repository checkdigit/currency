# Check Digit Currency Library

Copyright © 2021–2025 [Check Digit, LLC](https://checkdigit.com)

The Check Digit currency library is the officially sanctioned method for Check Digit services to deal with currency types, formatting and country/currency relationships at a particular date/time. Features:

- various currency and country lookup functions at a particular date/time starting 2018 and beyond, anything earlier will throw an error.
- Typescript types for Amount, Money, ISO 3166 country codes (numeric, alpha2, alpha3), and ISO 4217 currency codes (name, alphabetic, numeric)
- currency formatting of Check Digit-standard Money objects, with a variety of options
- tests to ensure compliance with number-based Intl.NumberFormat currency implementation
- tests to ensure correctness of underlying JS engine Intl implementation, with respect to currency
- multi-locale (all modern browsers and Node 14+ includes full [ICU](http://icu-project.org))
- uses built-in JS engine Intl implementation, no dependencies

## Installing

```shell
npm install @checkdigit/currency
```

then:

```ts
import * as currency from '@checkdigit/currency';
```

## Types and interfaces

The four core types in the currency library are

- Amount, which is an integer either in bigint or string form (or -0).
- Money, which is an Amount combined with currency of type CurrencyAlphabeticCode (e.g. 'USD')
- Country, which is an object containing a country's ISO 3166 information and currencies
- Currency, which is an object containing a currency's ISO 4217 information

There are defined literal types for country and currency codes:

- CurrencyAlphabeticCode
- CurrencyNumericCode
- CurrencyName
- CountryAlpha2
- CountryAlpha3
- CountryNumeric

```ts
export type Amount = string | bigint | -0;

export interface Money {
  amount: Amount;
  currency: CurrencyAlphabeticCode;
}

export interface Country {
  // ISO 3166 country display name, alpha2/3 and numeric codes
  name: string;
  alpha2: CountryAlpha2; // 'US' | 'NZ' ...
  alpha3: CountryAlpha3; // 'USA' | 'NZL' ...
  numeric: CountryNumeric; // '840' | '554' ...

  // ISO 4217 currencies
  currencyCodes: CurrencyAlphabeticCode[];
}

export interface Currency {
  name: CurrencyName; // 'US Dollar' | 'New Zealand Dollar' ...
  alphabeticCode: CurrencyAlphabeticCode; // 'USD' | 'NZD' ...
  numericCode: CurrencyNumericCode; // '840' | '554' ...
  minorUnits?: number;
  isFund?: true;
}
```

## Functions

### Formatting

- `format({ amount, currency }: Money, options?: CurrencyFormatOptions, locales?: string | string[]): string`

### Currencies

- `allCurrencies(): Currency[]`
- `getCurrency(code: CurrencyAlphabeticCode | CurrencyNumericCode): Currency`
- `getMinorUnitDigits(currency: CurrencyAlphabeticCode)`
- `getSymbol(currency: CurrencyAlphabeticCode, locales?: string | string[]): string`

### Countries

- `allCountries(): Country[]`
- `getCountry(code: CountryAlpha2 | CountryAlpha3 | CountryNumeric): Country`
- `getCountriesForCurrency(code: CurrencyAlphabeticCode): CountryAlpha3[]`

## Usage examples

### `format`

```ts
currency('2023-11-02T15:35:47.191Z').format({ amount: 123456789012345678901234567890n, currency: 'USD' });
// $1,234,567,890,123,456,789,012,345,678.90

currency('2023-11-02T15:35:47.191Z').format({ amount: 123456n, currency: 'USD' });
// $1234.56

currency('2023-11-02T15:35:47.191Z').format(
  { amount: 123456n, currency: 'USD' },
  {
    useGrouping: false,
    useCurrency: false,
  },
);
// 1234.56

currency('2023-11-02T15:35:47.191Z').format(
  { amount: 123456n, currency: 'USD' },
  {
    useGrouping: false,
    useCurrency: false,
    useDecimal: false,
  },
);
// 123456

currency('2023-11-02T15:35:47.191Z').format({ amount: -0, currency: 'USD' });
// -$0.00

currency('2023-11-02T15:35:47.191Z').format(
  { amount: 123456789n, currency: 'USD' },
  {
    currencyDisplay: 'code',
  },
  'de-DE',
);
// 1.234.567,89 USD

currency('2023-11-02T15:35:47.191Z').format(
  { amount: 123456n, currency: 'USD' },
  {
    useDecimal: false,
    useGrouping: false,
    useCurrency: false,
  },
  'as-IN',
);
// ১২৩৪৫৬
```

### `getSymbol`

```ts
currency('2023-11-02T15:35:47.191Z').getSymbol('USD');
// $

currency('2023-11-02T15:35:47.191Z').getSymbol('NZD');
// NZ$

currency('2023-11-02T15:35:47.191Z').getSymbol('NZD', 'en-NZ');
// $
```

### `getMinorUnitDigits`

```ts
currency('2023-11-02T15:35:47.191Z').getMinorUnitDigits('USD');
// 2

currency('2023-11-02T15:35:47.191Z').getMinorUnitDigits('JPY');
// 0
```

### `getCurrency`

```ts
currency('2023-11-02T15:35:47.191Z').getCurrency('840');
// {
//   name: 'US Dollar',
//   alphabeticCode: 'USD',
//   numericCode: '840',
//   minorUnits: 2
// }

currency('2023-11-02T15:35:47.191Z').getCurrency('NZD');
// {
//   name: 'New Zealand Dollar',
//   alphabeticCode: 'NZD',
//   numericCode: '554',
//   minorUnits: 2
// }
```

### `getCountry`

```ts
currency('2023-11-02T15:35:47.191Z').getCountry('USA');
// {
//   name: 'US',
//   alpha2: 'US',
//   alpha3: 'USA',
//   numeric: '840',
//   currencyCodes: [ 'USD' ]
// }
```

### `getCountriesForCurrency`

```ts
currency('2023-11-02T15:35:47.191Z').getCountriesForCurrency('NZD');
// [ 'COK', 'NIU', 'NZL', 'PCN', 'TKL' ]
```

## License

MIT
