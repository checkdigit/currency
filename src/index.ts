// index.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencies, { type CurrencyLibrary } from './currency.ts';
import countries, { type CountryLibrary } from './country.ts';
import format, { type FormatLibrary } from './format.ts';

export type * from './currency.ts';
export type * from './country.ts';
export type * from './format.ts';

export default function (at: string): CurrencyLibrary & CountryLibrary & FormatLibrary {
  return { ...countries(at), ...currencies(at), ...format(at) };
}
