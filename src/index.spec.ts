// index.spec.ts

/*
 * Copyright (c) 2021-2025 Check Digit, LLC
 *
 * This code is licensed under the MIT license (see LICENSE.txt for details).
 */

import { strict as assert } from 'node:assert';
import { describe, it } from 'node:test';

import type { CountryAlpha2, CountryAlpha3, CurrencyAlphabeticCode, CurrencyNumericCode, Money } from './index.ts';

describe('/api', () => {
  it('validate importing type CurrencyAlphabeticCode in currency', async () => {
    const currencyCode: CurrencyAlphabeticCode = 'USD';
    assert.equal(currencyCode, 'USD');
  });

  it('validate importing type CurrencyNumericCode in currency', async () => {
    const currencyCode: CurrencyNumericCode = '840';
    assert.equal(currencyCode, '840');
  });

  it('validate importing type CountryAlpha2 in country', async () => {
    const countryCode: CountryAlpha2 = 'US';
    assert.equal(countryCode, 'US');
  });

  it('validate importing type CountryAlpha3 in country', async () => {
    const countryCode: CountryAlpha3 = 'USA';
    assert.equal(countryCode, 'USA');
  });

  it('validate importing type Money in format', async () => {
    const money: Money = {
      amount: '3434345',
      currency: 'USD',
    };
    assert.deepEqual(money, { amount: '3434345', currency: 'USD' });
  });
});
