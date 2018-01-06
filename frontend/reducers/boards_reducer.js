import { RECEIVE_BOARD } from '../actions/board_actions';
import { RECEIVE_USER } from '../actions/user_actions'
import merge from 'lodash/merge';


const boardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board } );
      case RECEIVE_USER:
      newState = {};
      action.user.boardIds.forEach(board => newState[board.id] = board);
      return merge({}, newState);
      return state;
    default:
      return state;
  };
};

export default boardsReducer;
