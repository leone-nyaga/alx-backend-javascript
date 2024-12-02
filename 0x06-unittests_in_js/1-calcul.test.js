const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('should return sum of rounded numbers when added', function() {
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.4), 4);
  });

  it('should return difference of rounded numbers when subtratced', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });

  it('should return division of rounded numbers when divided', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it('should return "Error" when the divison is zero', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });

  it('should return null for an invalid operation type', function() {
    assert.strictEqual(calculateNumber('INALID', 1.4, 4.5), null);
  });
});
