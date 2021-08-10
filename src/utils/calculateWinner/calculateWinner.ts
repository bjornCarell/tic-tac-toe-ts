export const calculateWinner = (squares: (string | null)[]): string | null => {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [3, 4, 6],
  ];

  const { length } = winningCombos;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    const [a, b, c] = winningCombos[i];
    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
