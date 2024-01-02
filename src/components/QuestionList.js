// QuestionList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from Stack Exchange API
    axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow')
      .then(response => setQuestions(response.data.items))
      .catch(error => console.error(error));
  }, []);

  return (
    <>
    <hr/>
    <div className="question-list">
    <h2 className='head'>Questions</h2> 
    <div className='list-row'>
      <div className='space space1'>interesting</div>
      <div className='space space2'>featured <span className='featured'>432</span></div>
      <div className='space'> hot</div>
      <div className='space'>week</div>
      <div className='space'>month</div>
    </div>
      {questions.map(question => (
        <div key={question.question_id} className="question-item">
          <div className="question-item2">
          <h3>{question.title}</h3>
          <p className='answer'>{question.owner.display_name}</p>
          </div>
          <div className="question-details">
            <button className="info-button" title="Votes">
              <span>&#9650;</span> {question.score}
            </button>
            <button className="info-button" title="Views">
              <span>&#128065;</span> {question.view_count}
            </button>
            <button className="info-button" title="Answers">
              <span>&#9997;</span> {question.answer_count}
            </button>
          </div>
          {/* Other question details */}
          
        </div>
      ))}
    </div>
    
    <hr/>
    
    </>
    
  );
};

export default QuestionList;
