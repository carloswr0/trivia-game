import React from 'react';
import QuestionCard from '../QuestionCard/QuestionCard';
import loadedQuestions from '../../questions.json';
import './GameTable.css';

function GameTable() {
  return (
    <div className="GameTable">
      {
        loadedQuestions.map((element, index) => {
          return(
            <div key={index} className="Column">
              <div className="Header">
                {element.category.toLocaleUpperCase()}
              </div>
              {
                element.questions.map((question, index) => {
                  return(
                    <QuestionCard key={index} index={index} question={question}/>
                  )
                })
              }
            </div>
          );
        })
      }
    </div>
  );
}

export default GameTable;
