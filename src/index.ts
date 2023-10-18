// index.ts

/*
 * Copyright (c) 2021-2023 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import currencies from './currency';
import countries from './country';
import format from './format';

export default function (
  at: string,
): ReturnType<typeof currencies> & ReturnType<typeof countries> & ReturnType<typeof format> {
  return { ...countries(at), ...currencies(at), ...format(at) };
}
