import merge from 'lodash';
import { CREATE_BOARD_MODAL, CLOSE_MODAL } from '../actions/ui_actions';

const defaultState = {
  boardModal: null,
};

export const uiReducer = (state = defaultState, action) => {
  let newState = state;
  switch (action.type) {
    case CREATE_BOARD_MODAL:
      return merge({}, state, { boardModal: 'create'} );
    case CLOSE_MODAL:
      return newState;
    default:
      return state;
  }
}
