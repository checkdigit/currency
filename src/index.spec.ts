// index.spec.ts

import * as assert from 'assert';

import * as currency from './index';

describe('currency', () => {
  it('minorUnitDigits returns correct number for each currency', () => {
    assert.strictEqual(currency.getMinorUnitDigits('USD'), 2);
    assert.strictEqual(currency.getMinorUnitDigits('JPY'), 0);
  });

  it('getSymbol', () => {
    assert.strictEqual(currency.getSymbol('USD'), '$');
    assert.strictEqual(currency.getSymbol('JPY'), '¥');
  });

  it('format', () => {
    assert.strictEqual(currency.format({ amount: '-1230', currency: 'USD' }), '-$12.30');
    assert.strictEqual(currency.format({ amount: BigInt(123456), currency: 'USD' }), '$1,234.56');
    assert.strictEqual(
      currency.format({ amount: BigInt('123456789012345678901234567890'), currency: 'USD' }),
      '$1,234,567,890,123,456,789,012,345,678.90'
    );
    assert.strictEqual(
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideGrouping: true
        }
      ),
      '$1234.56'
    );
    assert.strictEqual(
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideCurrency: true,
          hideGrouping: true
        }
      ),
      '1234.56'
    );
    assert.strictEqual(
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideCurrency: true,
          hideGrouping: true,
          hideDecimal: true
        }
      ),
      '123456'
    );
    assert.throws(() =>
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideDecimal: true
        }
      )
    );
    assert.throws(() =>
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideGrouping: true,
          hideDecimal: true
        }
      )
    );
    assert.throws(() =>
      currency.format(
        { amount: '123456', currency: 'USD' },
        {
          hideCurrency: true,
          hideDecimal: true
        }
      )
    );
  });
});
