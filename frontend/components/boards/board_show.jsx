import React from 'react';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      deleteButton: false,
      fade: 'FadeInDown',
      fadeOut: 'fadeDownOut'
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
    if (document.documentElement.scrollTop >= 140) {
      this.setState({ show: true });
    }
    if (document.documentElement.scrollTop < 140) {
      this.setState({ show: false });
    }
  }

  renderTitle() {
    if (this.state.show) {
      return(
        <section className='fixed-title animated fadeInRight'>
          {this.props.board ? this.props.board.title : ''}
        </section>
      );
    } else {
      return(
        <section className='fixed-title animated fadeOutRight'>
          {this.props.board ? this.props.board.title : ''}
        </section>
      );
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

  createPinForm() {
    if (!this.props.board) return null;
    if (this.props.board.author_id === this.props.user.id) {
      return(
        <div className='pin-create' onClick={this.createBoard}>
          <div className='pin-create-button'>
            <div>+</div>
          </div>

          <div className='pin-create-title'>
            <div>Create A Pin!</div>
          </div>
        </div>
      );
    }
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

          <section className='board-content-box'>
            <div className="board-content">
              {this.createPinForm()}

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>

              <div className='pin-items'>
                <div className='pin-item-img'>
                  <div>IMG COMING SOON</div>
                </div>

                <div className='pin-item-title'>
                  <div>Pin Title Coming Soon!</div>
                </div>
              </div>
            </div>

          </section>
        </div>
    );
  }
}

export default BoardShow;
