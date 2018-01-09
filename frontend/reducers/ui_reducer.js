import merge from 'lodash/merge';
import { CREATE_BOARD_MODAL,
  CLOSE_MODAL, 
  UPDATE_BOARD_MODAL } from '../actions/ui_actions';

const defaultState = {
  boardModal: null,
};

export const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOARD_MODAL:
      return merge({}, state, { boardModal: 'create'} );
    case UPDATE_BOARD_MODAL:
      return merge({}, state, { boardModal: 'update'} );
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default uiReducer;
