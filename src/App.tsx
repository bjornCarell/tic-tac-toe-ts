import React from 'react';
import { Game } from './components/Game/Game';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <h3>Learning TypeScript.</h3>
      <p>Tic Tac Toe</p>
      <Game />
    </div>
  );
}

export default App;
