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
    this.toggleScroll = this.toggleScroll.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
    window.onscroll = () => this.toggleScroll();
  }

  toggleScroll() {
    if (document.documentElement.scrollTop > 67) {
      this.setState({ show: true });
    }
    if (document.documentElement.scrollTop < 68) {
      this.setState({ show: false });
    }
  }

  renderTitle() {
    if (this.state.show) {
      return(
        <section className='fixed-title animated lightSpeedIn'>
          {this.props.board ? this.props.board.title : ''}
        </section>
      );
    } else {
      return null;
    }
  }

  renderButton() {
    if (!this.state.deleteButton) {
      return(
        <div className='edit-bar animated fadeInUp'>
          <div><img src={window.staticImages.edit} /></div>
            {this.renderTitle()}
          <button onClick={this.handleButton}>Organize</button>
        </div>
      );
    } else {
      return(
        <div className='edit-bar animated fadeInDown'>
          <button
            className='hidden-button'>Delete</button>
            {this.renderTitle()}
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
          <div className='pins-count'>
            0 Pins
          </div>
        </div>
    );
  }
}





export default BoardShow;
