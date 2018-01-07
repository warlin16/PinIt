import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { createBoardModal, closeModal } from '../../actions/ui_actions';
import { createBoard } from '../../util/board_api_util';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    boards: Object.values(state.entities.boards),
    boardModal: state.ui.boardModal,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    createBoardModal: () => dispatch(createBoardModal()),
    closeModal: () => dispatch(closeModal()),
    createBoard: board => dispatch(createBoard(board)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
