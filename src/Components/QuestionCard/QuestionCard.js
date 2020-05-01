import React from 'react';
import './QuestionCard.css';
import { useState } from 'react';

function QuestionCard(props) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="QuestionCard" onClick={() => setOpened(!opened)}>
      {opened ? <p id="QuestionText">{props.question.question}</p> : <p id="QuestionValue">{props.question.value}</p>}
    </div>
  );
}

export default QuestionCard;
