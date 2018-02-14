import merge from "lodash/merge";
import {
  CREATE_BOARD_MODAL,
  CLOSE_MODAL,
  UPDATE_BOARD_MODAL,
  DELETE_BOARD_MODAL,
  CREATE_PIN_MODAL,
  UPDATE_PIN_MODAL,
  DELETE_PIN_MODAL
} from "../actions/ui_actions";
import { RECEIVE_ALL_PINS } from "../actions/pin_actions";

const defaultState = {
  boardModal: null,
  pinModal: null,
  pinOrder: []
};

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOARD_MODAL:
      return merge({}, state, { boardModal: "create" });
    case UPDATE_BOARD_MODAL:
      return merge({}, state, { boardModal: "update" });
    case DELETE_BOARD_MODAL:
      return merge({}, state, { boardModal: "delete" });
    case CREATE_PIN_MODAL:
      return merge({}, state, { pinModal: "create" });
    case UPDATE_PIN_MODAL:
      return merge({}, state, { pinModal: "update" });
    case DELETE_PIN_MODAL:
      return merge({}, state, { pinModal: "delete" });
    case CLOSE_MODAL:
      return defaultState;
    case RECEIVE_ALL_PINS:
      return merge({}, state, { pinOrder: action.pinOrder });
    default:
      return state;
  }
};

export default uiReducer;
