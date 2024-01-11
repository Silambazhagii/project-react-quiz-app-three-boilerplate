import React from 'react';
import { Link } from 'react-router-dom';
import './component.css';

const HomeComponent = () => {
  return (
    <>
      <div className='box'>
        <h1 className='title'>Quiz App</h1>
        <Link to='/quizcomponent'>
          <button className='play_btn' onClick={() => stateChanging()}>
            Play
          </button>
        </Link>
      </div>
    </>
  );
};

export default HomeComponent;
