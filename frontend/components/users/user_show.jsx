import React from 'react';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    return(
      <div>
        <Link to='/'> BACK TO THE FEED BRO</Link>
        <br />
        <h1> MY
          NAME IS {this.props.user ? this.props.user.username : ""}
          HAHAHHAHAHAHAHAHA
        </h1>
        <br />
      </div>
    );
  }
}

export default UserShow;
