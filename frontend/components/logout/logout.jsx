import React from 'react';
import { Link } from 'react-router-dom';

const Logout = (props) => {
  if (props.currentUser) {
    return(
    <div>
      {props.currentUser.username}
      <button onClick={props.logout}>Logout</button>
    </div>
    );
  } else {
    return null;
  }
};

export default Logout;
