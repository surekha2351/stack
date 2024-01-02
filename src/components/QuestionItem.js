// QuestionItem.js
import React from 'react';

const QuestionItem = ({ question }) => {
  return (
    <div>
      
      <h3>{question.title}</h3>
      <p>{question.owner.display_name}</p>
      {/* Other question details */}
      
    </div>
  );
};

export default QuestionItem;
