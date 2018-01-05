import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    const user = this.props.user ? this.props.user : { username: '' };
    return(
      <div className='show-container'>
        <div className='user-bio-box'>
          <div className='user-bio'>
            <div className='user-info'>
              <div className='user-name'><h3>{user.username}</h3></div>
            </div>
            <div className='user-img'>
              This is where an IMG will go
            </div>
          </div>


          <div className='content-selector'>
            <Link to='/'>FEED BRO</Link>
            <button>BOARDS</button>
            <button>PINS</button>
          </div>

        </div>

          <div className='user-content-box'>
            <h1>
              And they said I couldn't be a div... Fools!
            </h1>
          </div>

      </div>
    );
  }
}

export default UserShow;
