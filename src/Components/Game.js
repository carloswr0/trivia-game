import React from 'react';
import Scores from './Scores/Scores';
import Timer from './Timer/Timer';
import GameTable from './GameTable/GameTable';
import './Game.css';

function Game() {
  return (
    <div className="Game">
        <div className="Sidebar">
            <Timer />
            <Scores />
        </div>
        <div className="GameTable">
            <GameTable />
        </div>
    </div>
  );
}

export default Game;
