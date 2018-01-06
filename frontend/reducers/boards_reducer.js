import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import merge from 'lodash/merge';


const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board } );
      case RECEIVE_USER:
      debugger
      return state;
    default:
      return state;
  };
};

export default boardsReducer;
