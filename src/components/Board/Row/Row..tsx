import React from 'react';
import { Square } from '../Square/Square';

type RowProps = {
  selectSquare: (index: number) => void;
  squares: (null | string)[];
  numbers: number[];
}

export const Row = ({
  selectSquare,
  squares,
  numbers,
}: RowProps):JSX.Element => (
  <div className="board-row">
    {numbers.map((num) => (
      <Square
        key={num}
        selectSquare={selectSquare}
        squares={squares}
        num={num}
      />
    ))}
  </div>
);
