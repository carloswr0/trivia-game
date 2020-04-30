import React, { useState } from 'react';
import './Timer.css';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(30);

  const startCountdown = () => {
    const interval = setInterval(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
  };

  return (
    <div className="Timer">
      <div id="timeLeft" onClick={() => {startCountdown()}}>
        {timeLeft}s
      </div>
    </div>
  );
}

export default Timer;
