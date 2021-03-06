import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, { [action.user.id]: action.user} );
    default:
      return state;
  };
};

export default usersReducer;
