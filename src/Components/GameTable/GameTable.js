import React, { useEffect, useState } from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import loadedQuestions from '../../questions.json';
import './GameTable.css';

function GameTable(props) {
  const [spotlight, spotlightStatus] = useState(false);
  const [spotlightQuestion, setSpotlightQuestion] = useState("");

  useEffect(() => {
    const savedData = localStorage.getItem('gametable');
    if(!savedData) {
      localStorage.setItem('gametable', JSON.stringify([]));
    }
  }, []);

  const selectQuestion = (question) => {
    spotlightStatus(true);
    setSpotlightQuestion(question);
    props.startCountdown();
  }

  const deselect = () => {
    spotlightStatus(false);
    setSpotlightQuestion("");
    props.stopCountdown();
  }

  return (
    <div className="Container">
      <div className={`GameTable${spotlight ? " Hide" : ""}`}>
      {
        loadedQuestions.map((element, colindex) => {
          return(
            <div key={colindex} className="Column">
              <div className="Header">
                {element.category.toLocaleUpperCase()}
              </div>
              {
                element.questions.map((question, rowindex) => {
                  return(
                    <QuestionCard 
                      key={rowindex} 
                      question={question} 
                      id={`${colindex}-${rowindex}`}
                      selectQuestion={selectQuestion}
                    />
                  )
                })
              }
            </div>
          );
        })
      }
      </div>
      <div className={`Spotlight${!spotlight ? " Hide" : ""}`} onClick={() => deselect()}>
        { 
          spotlightQuestion ?
          <div id="CardSpotlight">
            <h1>{spotlightQuestion.value}</h1>
            <p>{spotlightQuestion.question}</p>
          </div> : null
        }
      </div>
    </div>
  );
}

export default GameTable;
