// index.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { default as currencies, type CurrencyLibrary } from './currency';
import { default as countries, type CountryLibrary } from './country';
import { default as format, type FormatLibrary } from './format';

export type * from './currency';
export type * from './country';
export type * from './format';

export default function (at: string): CurrencyLibrary & CountryLibrary & FormatLibrary {
  return { ...countries(at), ...currencies(at), ...format(at) };
}
