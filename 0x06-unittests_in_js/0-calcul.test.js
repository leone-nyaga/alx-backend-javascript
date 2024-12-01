const assert = require('assert');
const calculateNumber = require('./0-calcul');


describe('calculateNumber', function() {
  it('Should round both numbers to nearest integer and return sum', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  /* For testing edge cases */
  it('should handle edge cases correctly', function() {
  assert.strictEqual(calculateNumber(-1.4, 3.2), 2);
  });

  it('should return 0 if both numbers are 0', function() {
  assert.strictEqual(calculateNumber(0, 0), 0);
  });
});
