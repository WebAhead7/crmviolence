import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

import DragSentenceQuestion from './components/DragSentenceQuestion'

import './style.css'

const CreateTest = () => {
  const [test, setTest] = useState({
    testName: '',
    questions: {
      step1: [{}],
      step2: [{}],
    },
  })

  return (
    <div className='container'>
      <h1> Test 4: </h1>
      <DragSentenceQuestion />
    </div>
  )
}

export default CreateTest
