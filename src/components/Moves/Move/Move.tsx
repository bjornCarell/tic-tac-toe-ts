import React from 'react';

type MoveProps = {
  historicStep: number;
  currentStep: number;
  onClick: () => void;
}

export const Move = ({
  historicStep,
  currentStep,
  onClick,
}: MoveProps):JSX.Element => {
  const START = 'Go to game start';
  const MOVE = `Go to move #${historicStep}`;
  const text = historicStep === 0 ? START : MOVE;
  const isCurrent = currentStep === historicStep;

  return (
    <li>
      <button
        type="button"
        disabled={isCurrent}
        onClick={onClick}
      >
        {isCurrent ? `${text} (current)` : text}
      </button>
    </li>
  );
};
