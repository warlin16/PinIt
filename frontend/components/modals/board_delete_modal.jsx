import React from 'react';

class DeleteBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('LOL IM WORKING BROOOO');
  }

  render() {
    return(
      <div className='create-board-container' onClick={this.props.closeModal}>

        <div className='board-form-container' onClick={this.props.stopPropagation}>
          <h1> Are you sure you want to delete this board? </h1>
          <button onClick={this.handleSubmit}>Delete :(</button>
        </div>

      </div>
    );
  }
}

export default DeleteBoardForm;
