import React from 'react';
import { Link } from 'react-router-dom';


class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  navBar() {
    if (this.props.currentUser) {
      return(
        <div className='main-nav'> CLICK HERE FOR SHOW PAGE
          <Link to={`/user/${this.props.currentUser.id}`}>
            {this.props.currentUser.username}</Link>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>
        {this.navBar()}
      </div>
    )
  }
}


export default Logout;
