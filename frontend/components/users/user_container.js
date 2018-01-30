import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { createBoardModal,
  closeModal,
  createPinModal } from '../../actions/ui_actions';
import { createBoard } from '../../actions/board_actions';
import { createPin, clearPins } from '../../actions/pin_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    boards: Object.values(state.entities.boards),
    pins: Object.values(state.entities.pins),
    boardModal: state.ui.boardModal,
    pinModal: state.ui.pinModal,
    currentUser: state.session.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    createBoardModal: () => dispatch(createBoardModal()),
    closeModal: () => dispatch(closeModal()),
    createPinModal: () => dispatch(createPinModal()),
    createBoard: board => dispatch(createBoard(board)),
    createPin: formData => dispatch(createPin(formData)),
    clearPins: () => dispatch(clearPins()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
