import React from 'react';
import './QuestionCard.css';
import { useState, useEffect } from 'react';

function QuestionCard(props) {
  const [cardStatus, setCardStatus] = useState(false);
  const id = props.id;
 
  const revealCards = () => {
    setCardStatus(!cardStatus);
    if(!cardStatus) {
      props.selectQuestion(props.question);
    }
    saveToMemory();
  }

  const saveToMemory = () => {
    const savedData = localStorage.getItem('gametable');
    const id = props.id;
    if(savedData) {
      const gameTableStateCopy = JSON.parse(savedData);
      const alreadyExists = gameTableStateCopy.find(element => element === id);
      if(!alreadyExists) {
        gameTableStateCopy.push(props.id);
        localStorage.setItem('gametable', JSON.stringify(gameTableStateCopy));
      } else {
        const filteredArray = gameTableStateCopy.filter((elements) => elements !== id);
        localStorage.setItem('gametable', JSON.stringify(filteredArray));
      }
    }
  }

  useEffect(() => {
    const savedData = localStorage.getItem('gametable');
    if(savedData) {
      const gameTableStateCopy = JSON.parse(savedData);
      const alreadyExists = gameTableStateCopy.find(element => element === id);
      if(alreadyExists) {
        setCardStatus(true);
      }
    }
  }, [id]);

  return (
    <div className="QuestionCard" onClick={() => revealCards()}>
      {cardStatus ? <p id="QuestionText">{props.question.question}</p> : <p id="QuestionValue">{props.question.value}</p>}
    </div>
  );
}

export default QuestionCard;
