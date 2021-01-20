import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Inputs from '../../components/Inputs';

// import Sentencesbank from './components/Sentencesbank';
import ImageUploader from './components/ImageUploader';
import './style.css';
import { DropdownButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

const CreateTest = () => {
  const [test, setTest] = useState({
    testName: '',
    questions: {
      step1: [{}],
      step2: [{}],
    },
  });
  const onChangeHandler = (e) => {
    const val = e.target.value;
  };

  const onSubmitHandler = (e) => {
    //missing validation in this function I will do it later- Awwad
    e.preventDefault();
  };
  return (
    <div className='container titlescenter'>
      <h1>Exam #1</h1>
      <div className='btnflex'>
        {/* <button className='btnstage'>Stage 1</button>
        <button className='btnstage'>Stage 2</button>
        <button className='btnstage'>Stage 3</button>
        <button className='btnstage'>Stage 4</button>
        <button className='btnstage'>Stage 5</button>
        <button className='btnstage'>Stage 6</button>
        <button className='btnstage'>Stage 7</button> */}
        <DropdownButton id='dropdown-basic-button' title='Stage 1'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage1/q1'>1</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage1/q2'>2</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 2'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage2/q1p1'>1.1</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q1p2'>1.2</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q1p3'>1.3</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q1p4'>1.4</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q1p5'>1.5</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q1p6'>1.6</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage2/q2p1'>2.1</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q2p2'>2.2</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q2p3'>2.3</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q2p4'>2.4</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q2p5'>2.5</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q2p6'>2.6</Dropdown.Item>
          <Dropdown.ItemText>Question 3</Dropdown.ItemText>
          <Dropdown.Item href='#/stage2/q3p1'>3.1</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q3p2'>3.2</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q3p3'>3.3</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q3p4'>3.4</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q3p5'>3.5</Dropdown.Item>
          <Dropdown.Item href='#/stage2/q3p6'>3.6</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 3'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage3/q1'>1</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q1p1'>1.1</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q1p2'>1.2</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q1p3'>1.3</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q1p4'>1.4</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage3/q2'>2</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q2p1'>2.1</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q2p2'>2.2</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q2p3'>2.3</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q2p4'>2.4</Dropdown.Item>
          <Dropdown.ItemText>Question 3</Dropdown.ItemText>
          <Dropdown.Item href='#/stage3/q3'>3</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q3p1'>3.1</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q3p2'>3.2</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q3p3'>3.3</Dropdown.Item>
          <Dropdown.Item href='#/stage3/q3p4'>3.4</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 4'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage4/q1'>1</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q1p1'>1.1</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q1p2'>1.2</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q1p3'>1.3</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage4/q2'>2</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q2p1'>2.1</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q2p2'>2.2</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q2p3'>2.3</Dropdown.Item>
          <Dropdown.ItemText>Question 3</Dropdown.ItemText>
          <Dropdown.Item href='#/stage4/q3'>3</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q3p1'>3.1</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q3p2'>3.2</Dropdown.Item>
          <Dropdown.Item href='#/stage4/q3p3'>3.3</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 5'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage5/q1'>1</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage5/q2'>2</Dropdown.Item>
          <Dropdown.ItemText>Question 3</Dropdown.ItemText>
          <Dropdown.Item href='#/stage5/q3'>3</Dropdown.Item>
          <Dropdown.ItemText>Question 4</Dropdown.ItemText>
          <Dropdown.Item href='#/stage5/q4'>4</Dropdown.Item>
          <Dropdown.ItemText>Question 5</Dropdown.ItemText>
          <Dropdown.Item href='#/stage5/q5p1'>5.1</Dropdown.Item>
          <Dropdown.Item href='#/stage5/q5p2'>5.2</Dropdown.Item>
          <Dropdown.Item href='#/stage5/q5p3'>5.3</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 6'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage6/q1'>1</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id='dropdown-basic-button' title='Stage 7'>
          <Dropdown.ItemText>Question 1</Dropdown.ItemText>
          <Dropdown.Item href='#/stage7/q1'>1</Dropdown.Item>
          <Dropdown.ItemText>Question 2</Dropdown.ItemText>
          <Dropdown.Item href='#/stage7/q2'>2</Dropdown.Item>
        </DropdownButton>
      </div>
      <form onSubmit={onSubmitHandler}>
        <br />
        <h2>Question #1</h2>
        <br />
        <Inputs
          type='text'
          id='question1title'
          name='question1title'
          placeholder='Enter Question Title'
          alt='ques'
          onChangeFunc={onChangeHandler}
        />
        <br />
        <ImageUploader />
        <br />
        {/* <Sentencesbank /> */}
      </form>
    </div>
  );
};

export default CreateTest;
