import React from 'react';

class UpdateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      id: this.props.boardId,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  clearForm() {
    this.setState({ title: '', description: '' });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state);
    this.clearForm();
    this.props.closeModal();
  }

  render() {
    return(
      <div className='create-board-container' onClick={this.props.closeModal}>

        <div className='board-form-container' onClick={this.props.stopPropagation}>
          <form className='board-form' onSubmit={this.handleSubmit}>
            <div className='board-form-title'>
              <h2>Edit This Board</h2>
              <button onClick={this.props.closeModal}><strong>X</strong></button>
            </div>
            <div className='board-info'>
              <h3> Name </h3>
              <input
                type='text'
                value={this.state.title}
                placeholder={this.props.title}
                className='board-title'
                onChange={this.update('title')} />
            </div>
            <div className="board-info">
              <h3> Description </h3>
              <input
                type='text'
                value={this.state.description}
                placeholder={this.props.description}
                className='board-description'
                onChange={this.update('description')} />
            </div>

            <div className='board-submit'>
              <button
                onClick={this.props.closeModal}
                className='board-cancel'>Cancel</button>
              <button className='board-submit-button'>Save</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default UpdateBoardForm;
