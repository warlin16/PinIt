import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user} );
      // Object.keys(action.user.board) => board_ids
    default:
      return state;
  };
};

export default usersReducer;
