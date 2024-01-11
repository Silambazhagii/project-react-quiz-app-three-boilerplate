import React from 'react';
import './component.css';
import { Link } from 'react-router-dom';


const ResultComponent = (props) => {
  const startQuiz = () => {
    props.setScore(0);
    props.ans(0)
  };

  const home =()=>{
    props.setScore(0);
    props.ans(0)
  }

  const percentage = (props.score/15)*100

  const wrongans= (props.ans-props.score)
  return (
    <>
      <div className='result_body'>
        <div className='res'>Result</div>
        <div className='resBox'>
          <div className='practice'>You need more practice!</div>
          <div className='score'>
            Your score is {props.score}
          </div>
          <div className='ques_info'>
            <div>Total number of questions</div>
            <span>15</span>
          </div>
          <div className='ques_info'>
            <div>Number of attempted questions</div>
            <span>{props.ans}</span>
          </div>
          <div className='ques_info'>
            <div>Number of correct answers</div>
            <span>{props.score}</span>
          </div>
          <div className='ques_info'>
            <div>Number of wrong answers</div>
            <span>{wrongans}</span>
          </div>
        </div>
        <div>
          <Link to = '/quizComponent'  onClick={startQuiz}>
          <button className='play' >
            Play Again
          </button></Link>
          <Link to = '/' onClick={home}>
          <button className='home' >
            Back to home
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default ResultComponent;

