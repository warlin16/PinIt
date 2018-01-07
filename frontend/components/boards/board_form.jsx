import React from 'react';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: '',
      description: '',
      author_id: this.props.currentUserId };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  clearForm() {
    this.setState({ title: '', description: '', author_id: this.props.currentUserId });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
    this.clearForm();
    this.props.closeModal();
  }

  render() {
    return (
      <div className='create-board-container' onClick={this.props.closeModal}>

        <div className='board-form-container' onClick={this.props.stopPropagation}>
          <form className='board-form' onSubmit={this.handleSubmit}>
            <div className='board-form-title'>
              <h2>Create Board</h2>
              <button onClick={this.props.closeModal}><strong>X</strong></button>
            </div>
            <div className='board-info'>
              <h3> Name </h3>
              <input
                type='text'
                value={this.state.title}
                placeholder='Pick A Title'
                className='board-title'
                onChange={this.update('title')} />
            </div>
            <div className="board-info">
              <h3> Description </h3>
              <input
                type='text'
                value={this.state.description}
                placeholder='Write a brief description'
                className='board-description'
                onChange={this.update('description')} />
            </div>

            <div className='board-submit'>
              <button
                onClick={this.props.closeModal}
                className='board-cancel'>Cancel</button>
              <button className='board-submit-button'>Submit</button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}






export default BoardForm;
