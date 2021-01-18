import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import './style.css';

const Home = () => {
  return (
    <div className='container'>
      <button className='btn center'>
        <NavLink to='/create'>Create Test</NavLink>
      </button>
      <h4 className='tableh'> Exam List: </h4>
      <div className='examlist table-responsive '>
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>Exam Name</th>
              <th>Created On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
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
            <tr>
              <td>Exam_7_personality</td>
              <td>07/01/2021</td>
              <td>
                <button className='btn'>Edit Exam</button>
              </td>
            </tr>
            <tr>
              <td>Exam_8_personality</td>
              <td>08/01/2021</td>
              <td>
                <button className='btn'>Edit Exam</button>
              </td>
            </tr>
            <tr>
              <td>Exam_9_personality</td>
              <td>09/01/2021</td>
              <td>
                <button className='btn'>Edit Exam</button>
              </td>
            </tr>
            <tr>
              <td>Exam_10_personality</td>
              <td>10/01/2021</td>
              <td>
                <button className='btn'>Edit Exam</button>
              </td>
            </tr>
          </tbody>
        </Table>
        {/* <table>
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
          <tr>
            <td>Exam_6_personality</td>
            <td>06/01/2021</td>
            <td>
              <button className='btn'>Edit Exam</button>
            </td>
          </tr>
        </table> */}
      </div>
    </div>
  );
};

export default Home;
