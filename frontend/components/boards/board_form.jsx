import React from 'react';

const BoardForm = (props) => {
  return (
    <div className='create-board-container' onClick={props.closeModal}>

      <div className='board-form-container' onClick={props.stopPropagation}>
        <form className='board-form'>
          <div className='board-form-title'>
            <h2>Create Board</h2>
            <button onClick={props.closeModal}><strong>X</strong></button>
          </div>
          <div className='board-info'>
            <h3> Name </h3>
            <input
              type='text'
              value=''
              placeholder='Pick A Title'
              className='board-title' />
          </div>
          <div className="board-info">
            <h3> Description </h3>
            <input
              type='text'
              value=''
              placeholder='Write a brief description'
              className='board-description' />
          </div>

          <div className='board-submit'>
            <button
              onClick={props.closeModal}
              className='board-cancel'>Cancel</button>
            <button className='board-submit-button'>Submit</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default BoardForm;
