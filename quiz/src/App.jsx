import {React, useState} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent.jsx';
import QuizComponent from './Components/QuizComponent.jsx';
import ResultComponent from './Components/ResultComponent.jsx';

const App = () => {
  const [score, setScore] = useState(0);
  const [ans, setans] = useState(0);
  return (
    <>

      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/quizComponent' element={<QuizComponent setScore={setScore} setans={setans}/>} />
        <Route path='/resultComponent' element={<ResultComponent score={score} setScore={setScore} ans={ans} setans={setans}/>} />
      </Routes>
    </>
  );
};

export default App;
