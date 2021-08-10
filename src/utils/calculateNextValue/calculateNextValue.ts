export const calculateNextValue = (squares:(string | null)[]): string => (
  squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
);
