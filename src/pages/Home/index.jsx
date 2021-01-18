import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import './style.css';

const Home = () => {
  return (
    <div className='container'>
      <button className='btn center'>
        <NavLink to='/create'>Create Test</NavLink>
      </button>
      <h4 className='tableh'> Exam List: </h4>
      <div className='examlist'>
        <table>
          <tr>
            <th>Exam Name</th>
            <th>Created On</th>
            <th></th>
          </tr>
          <tr>
            <td>Exam_1_personality</td>
            <td>01/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
          <tr>
            <td>Exam_2_personality</td>
            <td>02/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
          <tr>
            <td>Exam_3_personality</td>
            <td>03/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
          <tr>
            <td>Exam_4_personality</td>
            <td>04/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
          <tr>
            <td>Exam_5_personality</td>
            <td>05/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
          <tr>
            <td>Exam_6_personality</td>
            <td>06/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Home;
