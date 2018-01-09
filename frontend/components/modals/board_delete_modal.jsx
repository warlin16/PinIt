import React from 'react';
import { withRouter } from 'react-router-dom';

class DeleteBoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteBoard(this.props.boardId).then(() => {
      this.props.closeModal();
    }).then(() => {
      this.props.history.push(`/user/${this.props.userId}`)
    });
  }

  render() {
    return(
      <div className='board-delete-container' onClick={this.props.closeModal}>

        <div className='board-delete-box' onClick={this.props.stopPropagation}>
          <div className='board-delete-title'>
            <h1> Don't do it... </h1>
            <strong onClick={this.props.closeModal}>X</strong>
          </div>
          <div className='board-delete-content'>
            <p>
              Once you delete a board and all it's pins,
               you can't go back! Think about it... </p>
          </div>
          <div className='board-delete-buttons'>
            <button
              className='delete-cancel'
              onClick={this.props.closeModal} >Cancel</button>
            <button className='delete-submit' onClick={this.handleSubmit}>Delete :(</button>
          </div>

        </div>

      </div>
    );
  }
}

export default withRouter(DeleteBoardForm);
