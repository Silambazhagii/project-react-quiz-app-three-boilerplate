import React, { useState } from 'react';
import './component.css';
import quizQuestions from '../../resources/quizQuestion.json';
import { Link, useNavigate } from 'react-router-dom';

const QuizComponent = ({ setScore, setans }) => {
  const [ind, setInd] = useState(0);
  const navigate = useNavigate();

  const handleScore = (selectedOption) => {
    setans((ans)=>ans+1)
    if (selectedOption === quizQuestions[ind].answer) {
      setScore((prevScore) => prevScore + 1);
      alert('Correct Answer')
      console.log(true)
    }
    else{
      alert('Wrong Answer')
    }
    if (ind < 14) {
      setInd((prevInd) => prevInd + 1);
    } else {
      navigate('/resultcomponent');
    }
  };

  const next = () => {
    if (ind < 14) {
      setInd((prevInd) => prevInd + 1);
    } else {
      navigate('/resultcomponent');
    }
  };

  const prev = () => {
    if (ind > 0) {
      setInd((prevInd) => prevInd - 1);
    } else {
      alert('There is no previous question');
    }
  };

  const quit = () => {
    alert('Are you sure you want to quit?');
    navigate('/')
  };

  return (
    <>
      <div className='quiz_body'>
        <div className='quizbox'>
          <h1 className='topic'>Question</h1>
          <div className='q_no'>{ind + 1} of 15</div>
          <div className='question'>{quizQuestions[ind].question}</div>
          <div>
            <button className='op1' onClick={() => handleScore(quizQuestions[ind].optionA)}>
              {quizQuestions[ind].optionA}
            </button>
            <button className='op2' onClick={() => handleScore(quizQuestions[ind].optionB)}>
              {quizQuestions[ind].optionB}
            </button>
            <button className='op3' onClick={() => handleScore(quizQuestions[ind].optionC)}>
              {quizQuestions[ind].optionC}
            </button>
            <button className='op4' onClick={() => handleScore(quizQuestions[ind].optionD)}>
              {quizQuestions[ind].optionD}
            </button>
          </div>
          <div className='choice'>
            <button className='btns prev' onClick={prev}>
              Previous
            </button>
            <button className='btns next' onClick={next}>
              Next
            </button>
            <button className='btns quit' onClick={quit}>
              Quit
            </button>
            <Link to='/resultComponent'>
              <button className='btns'>
                Finish
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizComponent;
