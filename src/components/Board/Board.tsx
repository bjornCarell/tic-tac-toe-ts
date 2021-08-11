import React from 'react';
import { Row } from './Row/Row.';

type BoardProps = {
  selectSquare: (index: number) => void;
  squares: (null | string)[];
}

export const Board = ({ selectSquare, squares }: BoardProps): JSX.Element => (
  <div>
    <Row selectSquare={selectSquare} squares={squares} numbers={[0, 1, 2]} />
    <Row selectSquare={selectSquare} squares={squares} numbers={[3, 4, 5]} />
    <Row selectSquare={selectSquare} squares={squares} numbers={[6, 7, 8]} />
  </div>
);
