import React from 'react';
import { Link } from 'react-router-dom';

const UserBoardItem = ({id, title, description}) => {
  return(
    <Link to={`/user/board/${id}`} className='board-show-link'>
      <div className='board-items'>
        <div className='board-item-img'>
          <div>IMG COMING SOON</div>
        </div>

        <div className='board-item-title'>
          <div>{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default UserBoardItem;
