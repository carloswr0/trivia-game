import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer() {
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

  useEffect(() => {
    if(timeLeft === 0) { clearInterval(intervalId)}
  }, [timeLeft, intervalId]);

  return (
    <div className="Timer">
      <h1>TIMER</h1>
      <div className={`${timeLeft < 10 && timeLeft !== 0 ? "Runningout" : ""}`} id="timeLeft" onClick={() => {startCountdown()}}>
        {timeLeft}s
      </div>
    </div>
  );
}

export default Timer;
