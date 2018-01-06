import React from 'react';
import { Link } from 'react-router-dom';
import UserBoardItem from './user_board_item';

class UserShow extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  boardRender() {
    const boards = this.props.boards.map(board => <UserBoardItem
      key={board.id} title={board.title}
      description={board.description} />);
    return boards;
  }

  render() {
    const user = this.props.user ? this.props.user : { username: '' };
    return(
      <div className='show-container'>
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
              <div><img src={window.staticImages.tempLogo} /></div>
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
              <div>
                <h1>
                  And they said I couldn't be a div... Fools!
                </h1>
              </div>

              {this.boardRender()}
            </div>
          </section>

      </div>
    );
  }
}

export default UserShow;
