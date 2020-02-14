// format.spec.ts

import * as assert from 'assert';

import { all, CurrencyAlphabeticCode, getMinorUnitDigits } from './currency';
import * as format from './format';

describe('format', () => {
  it('getSymbol', () => {
    assert.strictEqual(format.getSymbol('USD'), '$');
    assert.strictEqual(format.getSymbol('JPY'), '¥');
  });

  it('format matches Intl number implementation for all supported currencies', () => {
    function check(code: CurrencyAlphabeticCode, amount: number) {
      const minorUnitDigits = getMinorUnitDigits(code);
      const minorUnit = 10 ** minorUnitDigits;
      const internal = format.format({ amount: amount === 0 ? amount : BigInt(amount), currency: code });
      const reference = Intl.NumberFormat(undefined, { style: 'currency', currency: code }).format(amount / minorUnit);
      assert.strictEqual(internal, reference);
    }

    for (const code of all().map(({ alphabeticCode }) => alphabeticCode)) {
      for (let power = 0; power < 15; power++) {
        const base = 10 ** power;
        check(code, base - 1);
        check(code, base);
        check(code, base + 1);
        check(code, -(base - 1));
        check(code, -base);
        check(code, -(base + 1));
      }
    }
  });

  it('format supports zero-based edge cases', () => {
    assert.strictEqual(format.format({ amount: -0, currency: 'USD' }), '-$0.00');
    assert.strictEqual(format.format({ amount: '-0', currency: 'USD' }), '-$0.00');
    assert.strictEqual(format.format({ amount: 0, currency: 'USD' }), '$0.00');
    assert.strictEqual(format.format({ amount: BigInt(0), currency: 'USD' }), '$0.00');
    assert.strictEqual(format.format({ amount: '0', currency: 'USD' }), '$0.00');
  });

  it('format supports edge cases', () => {
    assert.strictEqual(
      format.format({ amount: BigInt('123456789012345678901234567890'), currency: 'USD' }),
      '$1,234,567,890,123,456,789,012,345,678.90'
    );
    assert.strictEqual(
      format.format({ amount: BigInt('-123456789012345678901234567890'), currency: 'USD' }),
      '-$1,234,567,890,123,456,789,012,345,678.90'
    );
    assert.strictEqual(
      format.format(
        { amount: '123456', currency: 'USD' },
        {
          hideGrouping: true
        }
      ),
      '$1234.56'
    );
    assert.strictEqual(
      format.format(
        { amount: '123456', currency: 'USD' },
        {
          hideCurrency: true,
          hideGrouping: true
        }
      ),
      '1234.56'
    );
    assert.strictEqual(
      format.format(
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
      format.format(
        { amount: '123456', currency: 'USD' },
        {
          hideDecimal: true
        }
      )
    );
    assert.throws(() =>
      format.format(
        { amount: '123456', currency: 'USD' },
        {
          hideGrouping: true,
          hideDecimal: true
        }
      )
    );
    assert.throws(() =>
      format.format(
        { amount: '123456', currency: 'USD' },
        {
          hideCurrency: true,
          hideDecimal: true
        }
      )
    );
  });
});
