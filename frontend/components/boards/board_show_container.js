import { connect } from 'react-redux';
import {
  fetchBoard,
  updateBoard,
  deleteBoard } from '../../actions/board_actions';
import {
  updateBoardModal,
  closeModal,
  deleteBoardModal } from '../../actions/ui_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    user: state.session.currentUser,
    pins: Object.values(state.entities.pins),
    boardModal: state.ui.boardModal,
  };
}

const mapDispatchToProps = dispatch => {
  return{
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    updateModal: () => dispatch(updateBoardModal()),
    deleteModal: () => dispatch(deleteBoardModal()),
    closeModal: () => dispatch(closeModal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
