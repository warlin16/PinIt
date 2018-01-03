import React from 'react';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  if (props.currentUser) {
    return(
    <div>
      <button onClick={props.logout}>Logout</button>
    </div>
    );
  } else {
    return(
      <div>
        <Link to={'/login'}>Sign In</Link>
      </div>
    );
  }
};

export default Logout;
