import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {

  it('it should return sum of rounded numbers when added', function() {
    const result = calculateNumber('SUM', 1.2, 3.4);
    expect(result).to.equal(4);
  });

  it('should return difference of rounded numbers when subtracted', function() {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should return division of rounded numbers when divided', function() {
    const result = calculateNumber('DIVIDE', 1.4, 4.5 );
    expect(result).to.be.closeTo(0.2, 0.01); // using closeTo for floating point precision
  });

  it('should return "Error" when the division is by zero', function() {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });

  it('should return null for an invalid operation type', function() {
    const result = calculateNumber('INVALID', 1.4, 4.5);
    expect(result).to.be.null;
  });

});
