import { calculateWinner } from '../calculateWinner/calculateWinner';
import { calculateNextValue } from '../calculateNextValue/calculateNextValue';
import { calculateStatus } from './calculateStatus';

describe('calculate status function', () => {
  it('should return the winner when there is one', () => {
    const result = ['X', null, 'O', 'X', null, null, 'X', 'O'];
    const winner = calculateWinner(result);
    const nextValue = calculateNextValue(result);

    const expected = 'Winner: X';
    const actual = calculateStatus(winner, result, nextValue);

    expect(actual).toBe(expected);
  });
  it('should return next value when no winner and still null values', () => {
    const result = ['X', 'X', 'O', 'X', null, null, 'O', 'O'];
    const winner = calculateWinner(result);
    const nextValue = calculateNextValue(result);

    const expected = 'Next player: X';
    const actual = calculateStatus(winner, result, nextValue);

    expect(actual).toBe(expected);
  });
  it('should return next value when no winner and no null values', () => {
    const result = ['X', 'X', 'O', 'X', '0', 'X', 'O', 'O'];
    const winner = calculateWinner(result);
    const nextValue = calculateNextValue(result);

    const expected = 'Scratch: Cat\'s game';
    const actual = calculateStatus(winner, result, nextValue);

    expect(actual).toBe(expected);
  });
});
