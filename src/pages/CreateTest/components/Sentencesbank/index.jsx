import React from 'react'

const index = () => {
  function addSentence(e) {}
  return (
    <>
      <InputGroup className='mb-3'>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <InputGroup.Append>
          <Button onClick={addSentence} variant='outline-secondary'>
            <i class='fas fa-plus'></i>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </>
  )
}

export default index
