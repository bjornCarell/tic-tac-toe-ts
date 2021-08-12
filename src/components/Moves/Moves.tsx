import React from 'react';
import { Move } from './Move/Move';

type MovesProps = {
  history: (string | null)[][];
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export const Moves = ({
  history,
  currentStep,
  setCurrentStep,
}: MovesProps): JSX.Element => (
  <ol>
    {
      history.map((historicState, historicStep) => (
        <Move
          key={JSON.stringify(historicState)}
          historicStep={historicStep}
          currentStep={currentStep}
          onClick={() => setCurrentStep(historicStep)}
        />
      ))
    }
  </ol>
);
