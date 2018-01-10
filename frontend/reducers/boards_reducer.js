import { RECEIVE_BOARD, REMOVE_BOARD } from '../actions/board_actions';
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
    case REMOVE_BOARD:
      newState = merge({}, state);
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default boardsReducer;
