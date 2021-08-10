export const calculateStatus = (
  winner: string | null,
  squares: (string | null)[],
  nextValue: string,
// eslint-disable-next-line no-nested-ternary
): string => (winner
  ? `Winner: ${winner}`
  : squares.every(Boolean)
    ? 'Scratch: Cat\'s game'
    : `Next player: ${nextValue}`);
