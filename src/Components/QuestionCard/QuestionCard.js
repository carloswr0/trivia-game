import React from 'react';
import './QuestionCard.css';
import { useState } from 'react';

function QuestionCard(props) {
  const [opened, setOpened] = useState(false);
  const value = (props.index + 1) * 100;
  return (
    <div className="QuestionCard" onClick={() => setOpened(!opened)}>
      {opened ? <p id="QuestionText">{props.question}</p> : <p id="QuestionValue">{value}</p>}
    </div>
  );
}

export default QuestionCard;
