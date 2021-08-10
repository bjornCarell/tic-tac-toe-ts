import { calculateWinner } from './calculateWinner';

describe('calculate winner function', () => {
  it('should return null if no line of winning combinations', () => {
    const result = ['X', null, 'O', null, null, null, 'X', 'O'];
    const expected = null;
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });
  it('should return winner if line of winning combinations', () => {
    const result = ['X', null, 'O', 'X', null, null, 'X', 'O'];
    const expected = 'X';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });
});
