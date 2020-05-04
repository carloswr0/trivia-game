import React, { useEffect, useState } from 'react';
import Scores from './Scores/Scores';
import Timer from './Timer/Timer';
import Logo from './Logo/Logo';
import GameTable from './GameTable/GameTable';
import './Game.css';

function Game() {
  const [timeLeft, setTimeLeft] = useState(30);
  const [intervalId, setIntervalId] = useState();
 
  const startCountdown = () => {
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId(undefined);
      setTimeLeft(30);
    } else {
      const interval = setInterval(() => {setTimeLeft(time => time - 1)}, 1000);
      setIntervalId(interval);
    }
  };

  const stopCountdown = () => {
    clearInterval(intervalId);
    setIntervalId(undefined);
    setTimeLeft(30);
  };

  useEffect(() => {
    if(timeLeft === 0) { clearInterval(intervalId)}
  }, [timeLeft, intervalId]);

  return (
    <div className="Game">
        <div className="Sidebar">
            <Logo />
            <Timer 
              startCountdown={startCountdown}
              timeLeft={timeLeft}
            />
            <Scores />
        </div>
        <div className="Main">
            <GameTable 
              startCountdown={startCountdown}
              stopCountdown={stopCountdown}
            />
        </div>
    </div>
  );
}

export default Game;
