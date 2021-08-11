import { calculateWinner } from './calculateWinner';

// const winningCombos = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

describe('calculate winner function', () => {
  it('should return null if no line of winning combinations', () => {
    const result = ['X', null, 'O', null, null, null, 'X', 'O', null];
    const expected = null;
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo:  0, 1, 2', () => {
    const result = ['X', 'X', 'X', null, null, null, null, null, null];
    const expected = 'X';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 3, 4, 5', () => {
    const result = [null, null, null, 'O', 'O', 'O', null, null, null];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 6, 7, 8', () => {
    const result = [null, null, null, null, null, null, 'O', 'O', 'O'];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 0, 3, 6', () => {
    const result = ['O', null, null, 'O', null, null, 'O', null, null];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 1, 4, 7', () => {
    const result = [null, 'O', null, null, 'O', null, null, 'O', null];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 2, 5, 8', () => {
    const result = [null, null, 'O', null, null, 'O', null, null, 'O'];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 0, 4, 8', () => {
    const result = ['O', null, null, null, 'O', null, null, null, 'O'];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });

  it('should return winner for combo: 2, 4, 6', () => {
    const result = [null, null, 'O', null, 'O', null, 'O', null, null];
    const expected = 'O';
    const actual = calculateWinner(result);
    expect(actual).toEqual(expected);
  });
});
