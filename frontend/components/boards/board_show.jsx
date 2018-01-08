import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteButton: false,
    }

    this.renderButton = this.renderButton.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
    window.onscroll = () => this.toggleScroll();
  }

  toggleScroll() {
    // if (document.documentElement.scrollTop >= 68) {
    //   console.log('Im gonna show when youre ready');
    // }
    // if (document.documentElement.scrollTop < 68) {
    //   console.log(`You're almost getting it!`);
    // }
  }

  renderButton() {
    if (!this.state.deleteButton) {
      return(
        <div className='edit-bar animated fadeInUp'>
          <div><img src={window.staticImages.edit} /></div>
          <button onClick={this.handleButton}>Organize</button>
        </div>
      );
    } else {
      return(
        <div className='edit-bar animated fadeInDown'>
          <button
            className='hidden-button'>Delete</button>
          <button
            onClick={this.handleButton}
            className='hidden-button'>Cancel</button>
        </div>
      );
    }
  }

  handleButton(e) {
    e.preventDefault();
    this.setState({ deleteButton: !this.state.deleteButton });
  }

  render() {
    const board = this.props.board ?
    this.props.board : {title: '', description: ''};
    return(
        <div className='board-show-content'>
          {this.renderButton()}
          <div className='show-board-title'>
            {board.title}
          </div>
        </div>
    );
  }
}





export default BoardShow;
