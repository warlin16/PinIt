import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return(
      <div className='show-container'>
        <div className='main-link-div'>
          <Link to='/'> BACK TO THE FEED BRO</Link>
        </div>
          <div className='main-info-box'>
            <h1> MY
              NAME IS {this.props.user ? this.props.user.username : ""}
              AND I'M IN A DIV
            </h1>
          </div>
      </div>
    );
  }
}

export default UserShow;
