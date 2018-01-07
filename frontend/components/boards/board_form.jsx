import React from 'react';

const BoardForm = (props) => {
  return (
    <div className='create-board-container' onClick={props.closeModal}>

      <div className='board-form-container' onClick={props.stopPropagation}>
        <form className='board-form'>
          <h1>Just a test to see if I'm here...</h1>
        </form>
      </div>

    </div>
  )
}

export default BoardForm;
