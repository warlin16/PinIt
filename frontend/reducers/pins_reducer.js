import { RECEIVE_PIN,
  CLEAR_PINS,
  RECEIVE_ALL_PINS,
  REMOVE_PIN } from '../actions/pin_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_BOARD } from '../actions/board_actions';
import merge from 'lodash/merge';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_PIN:
      return merge({}, state, { [action.pin.id]: action.pin });
    case RECEIVE_USER:
      newState = {};
      action.user.pinIds.forEach(pin => newState[pin.id] = pin);
      return merge({}, newState);
    case RECEIVE_BOARD:
      newState = {};
      action.board.pinIds.forEach(pin => newState[pin.id] = pin);
      return merge({}, newState);
    case RECEIVE_ALL_PINS:
      return merge({}, state, action.pins);
    case REMOVE_PIN:
      newState = merge({}, state);
      delete newState[action.pinId];
      return newState;
    case CLEAR_PINS:
      newState = {};
      return merge({}, newState);
    default:
      return state;
  }
};

export default pinsReducer;
