import React from 'react';
import { Link } from 'react-router-dom';
import UserBoardItem from './user_board_item';
import BoardForm from '../boards/board_form';

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.boards = [];
    this.createBoard = this.createBoard.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  createBoard(e) {
    e.preventDefault();
    this.props.createBoardModal();
  }

  closeModal(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  renderBoardCreate() {
    if (this.props.boardModal === 'create') {
      return(
        <BoardForm
          closeModal={this.closeModal}
          stopPropagation={this.stopPropagation} />
      );
    }
  }

  render() {
    const user = this.props.user ? this.props.user : { username: '' };
    this.boards = this.props.boards.map(board => <UserBoardItem
      key={board.id} title={board.title}
      description={board.description} />);
    return(
      <div className='show-container'>
        {this.renderBoardCreate()}
        <div className='user-bio-box'>
          <div className='user-bio'>
            <div className='user-info'>
              <div className='user-name'><h3>{user.username}</h3></div>

              <div className='follows'>
                <div className='followers'>
                  <div>0</div>
                    <div>followers</div>
                  </div>
                <div className='following'>
                  <div>0</div>
                    <div>following</div>
                  </div>
              </div>
            </div>

            <div className='user-img'>
              <div><img alt={'Squeezy'} src={window.staticImages.tempLogo} /></div>
            </div>
          </div>

          <div className='content-selector'>
            <Link to='/'>BACK TO FEED</Link>
            <button>BOARDS</button>
            <button>PINS</button>
          </div>

        </div>

          <section className='user-content-box'>
            <div className='user-content'>
              <div className='board-create' onClick={this.createBoard}>
                <div className='board-create-button'>
                  <div>+</div>
                </div>

                <div className='board-create-title'>
                  <div>Create A Board!</div>
                </div>
              </div>

              {this.boards}
            </div>
          </section>

      </div>
    );
  }
}

export default UserShow;
