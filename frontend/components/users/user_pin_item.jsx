import React from 'react';
import { Link } from 'react-router-dom';

class UserPinItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='pin-items'>
        <div className='pin-item-img'>
          <img src={this.props.url} />
        </div>

        <div className='pin-item-title'>
          <div>{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default UserPinItem;
