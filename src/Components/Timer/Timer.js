import React from 'react';
import './Timer.css';

function Timer(props) {
  return (
    <div className="Timer">
      <h1>TIMER</h1>
      <div className={`${props.timeLeft < 10 && props.timeLeft !== 0 ? "Runningout" : ""}`} id="timeLeft" onClick={() => {props.startCountdown()}}>
        {props.timeLeft}s
      </div>
    </div>
  );
}

export default Timer;
