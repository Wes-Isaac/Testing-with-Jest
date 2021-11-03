const calc = require('./calc.js')
describe('calculator', () => {

  test('Add method', () => {
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.add(2, 3)).toBe(5);
    expect(calc.add(5, 5)).toBe(10);
  });

  test('Subtract method', () => {
    expect(calc.subtract(2, 1)).toBe(1);
    expect(calc.subtract(5, 3)).toBe(2);
    expect(calc.subtract(1, 5)).toBe(-4);
  });

  test('Multiply method', () => {
    expect(calc.multiply(2, 1)).toBe(2);
    expect(calc.multiply(5, 2)).toBe(10);
    expect(calc.multiply(2, 3.5)).toBe(7);
  });

  test('Divide method', () => {
    expect(calc.divide(2, 2)).toBeCloseTo(1);
    expect(calc.divide(10, 4)).toBeCloseTo(2.5);
    expect(calc.divide(6, 2)).toBeCloseTo(3);
  });


});