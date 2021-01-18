import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import DragnDropFiles from './components/DragnDropFiles';
import AddTitle from './components/AddQuesTitle';

import './style.css';

const CreateTest = () => {
  return (
    <div className='container'>
      <h1> Exam 4: </h1>
      <AddTitle title='Questions 1 Title' />
      <DragnDropFiles />
    </div>
  );
};

export default CreateTest;
