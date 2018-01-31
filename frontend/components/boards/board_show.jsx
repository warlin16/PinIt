import React from 'react';
import UpdateBoardForm from '../modals/board_update_modal';
import DeleteBoardForm from '../modals/board_delete_modal';
import { Link } from 'react-router-dom';
import UserPinItem from '../users/user_pin_item';
import PinForm from '../modals/pin_create_modal';
import MDSpinner from 'react-md-spinner';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      deleteButton: false,
      loading: true,
    };


    this.renderButton = this.renderButton.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.toggleScroll = this.toggleScroll.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.deleteModal = this.deleteModal.bind(this);
    this.createPin = this.createPin.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.match.params.boardId);
    window.onscroll = () => this.toggleScroll();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.board) {
      return true;
    } else {
      return false;
    }
  }

  componentWillReceiveProps() {
    this.setState({loading: false});
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
    if (this.props.board &&
      (this.props.user.id === this.props.board.author_id)) {
      if (!this.state.deleteButton) {
        return(
          <div className='edit-bar'>
            <div className='animated fadeInDown' onClick={this.updateBoard}>
              <img src={window.staticImages.edit} />
            </div>
            {this.renderTitle()}
            <button className='animated fadeInDown' onClick={this.handleButton}>Organize</button>
          </div>
        );
      } else {
        return(
          <div className='edit-bar animated fadeInDown'>
            <button
              onClick={this.deleteModal}
              className='hidden-button'>
              Delete</button>
            {this.renderTitle()}
            <button
              onClick={this.handleButton}
              className='hidden-button'>Cancel</button>
          </div>
        );
      }
    } else {
      return (
        <div className='edit-bar animated fadeInUp'>
          {this.renderTitle()}
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
        <div className='pin-create' onClick={this.createPin}>
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

  updateBoard() {
    this.props.updateModal();
  }

  createPin() {
    this.props.createPinModal();
  }

  deleteModal() {
    this.props.deleteModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderBoardDelete() {
    if (this.props.boardModal === 'delete') {
      return(
        <DeleteBoardForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          deleteBoard={this.props.deleteBoard}
          boardId={this.props.board.id}
          userId={this.props.user.id} />
      );
    }
  }

  renderPinCreate() {
    if (this.props.pinModal === 'create') {
      return(
        <PinForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          currentUserId={this.props.user.id}
          createPin={this.props.createPin}
          />
      );
    }
  }

  renderBoardUpdate() {
    if (this.props.boardModal === 'update') {
      return(
        <UpdateBoardForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation}
          updateBoard={this.props.updateBoard}
          boardId={this.props.board.id}
          title={this.props.board.title}
          description={this.props.board.description} />
      );
    }
  }

  pinCount() {
    return (
      <div className='pins-count'>
        {this.props.pins.length} Pins
      </div>
    );
  }

  render() {
    const board = this.props.board ?
      this.props.board : {};
      const pins = this.props.pins.map(pin => <UserPinItem
        key={pin.id} id={pin.id} title={pin.title}
        description={pin.description} url={pin.img} />);
    return(
        <div className='board-show-content'>
          {this.renderButton()}
          <div className='show-board-title'>
            {board.title}
          </div>
          {this.state.loading ? null : this.pinCount()}

          <section className='board-content-box'>
            <div className="board-content">
              {this.createPinForm()}
              {this.renderPinCreate()}
              {this.renderBoardUpdate()}
              {this.renderBoardDelete()}
              {this.state.loading ? <MDSpinner size={100}/> : pins}
            </div>

          </section>
        </div>
    );
  }
}

export default BoardShow;
