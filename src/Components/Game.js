import React, { useEffect } from 'react';
import Scores from './Scores/Scores';
import Timer from './Timer/Timer';
import Logo from './Logo/Logo';
import GameTable from './GameTable/GameTable';
import './Game.css';

function Game() {
  useEffect(() => {
    // Load
    //console.log("Load data")
  }, []);

  return (
    <div className="Game">
        <div className="Sidebar">
            <Logo />
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
