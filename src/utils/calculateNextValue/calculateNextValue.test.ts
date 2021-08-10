import { calculateNextValue } from './calculateNextValue';

describe('calculate next value function', () => {
  it('should return X if null values are even', () => {
    const array = ['X', null, 'O', null, null, null, 'X', 'O'];
    const expected = 'X';
    const actual = calculateNextValue(array);
    expect(actual).toBe(expected);
  });
  it('should return O if null values are odd', () => {
    const array = ['X', null, 'O', null, null, null, 'X', null];
    const expected = 'O';
    const actual = calculateNextValue(array);
    expect(actual).toBe(expected);
  });
});
