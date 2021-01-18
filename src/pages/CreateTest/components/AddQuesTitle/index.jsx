import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './style.css';

const AddQuesTitle = ({ title }) => {
  return (
    <h3>
      <br />
      {title}
    </h3>
  );
};

export default AddQuesTitle;
