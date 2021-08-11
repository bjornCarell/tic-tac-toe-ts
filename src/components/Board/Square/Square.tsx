import React from 'react';

type SquareProps = {
  selectSquare: (index: number) => void;
  squares: (null | string)[];
  num: number;
}

export const Square = ({
  selectSquare,
  squares,
  num,
}: SquareProps):JSX.Element => (
  <button type="button" className="square" onClick={() => selectSquare(num)}>
    {squares[num]}
  </button>
);
