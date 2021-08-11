import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage/useLocalStorage';
import {
  calculateNextValue,
} from '../../utils/calculateNextValue/calculateNextValue';
import { calculateWinner } from '../../utils/calculateWinner/calculateWinner';
import { calculateStatus } from '../../utils/calculateStatus/calculateStatus';
import { Board } from '../Board/Board';
import '../../Game.css';

export const Game = ():JSX.Element => {
  const [history, setHistory] = useLocalStorage('history', [
    Array(9).fill(null),
  ]);
  const [currentStep, setCurrentStep] = useLocalStorage('step', 0);

  const currentSquares = history[currentStep];
  const nextValue = calculateNextValue(currentSquares);
  const winner = calculateWinner(currentSquares);
  const status = calculateStatus(winner, currentSquares, nextValue);

  const selectSquare = (square: number): void => {
    // If there is a winner or if the square is clicked
    // we want to exit early
    if (winner || currentSquares[square]) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    // Copy the squares to avoid bugs
    const copyCurrentSquares = [...currentSquares];
    copyCurrentSquares[square] = nextValue;
    const newHistory = history.slice(0, currentStep + 1);

    // setHistory and setCurrentStep
    setHistory([...newHistory, copyCurrentSquares]);
    setCurrentStep(copyCurrentSquares.filter(Boolean).length);
  };

  const restart = ():void => {
    setHistory([Array(9).fill(null)]);
    setCurrentStep(0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board selectSquare={selectSquare} squares={currentSquares} />
        <button onClick={restart} type="button" className="restart">
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
      </div>
    </div>
  );
};
