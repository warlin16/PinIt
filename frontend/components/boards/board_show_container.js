import { connect } from "react-redux";
import {
  fetchBoard,
  updateBoard,
  deleteBoard
} from "../../actions/board_actions";
import {
  updateBoardModal,
  closeModal,
  createPinModal,
  deleteBoardModal
} from "../../actions/ui_actions";
import { createPin } from "../../actions/pin_actions";
import BoardShow from "./board_show";

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    currentUser: state.session.currentUser,
    pins: Object.values(state.entities.pins),
    boardModal: state.ui.boardModal,
    pinModal: state.ui.pinModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    updateModal: () => dispatch(updateBoardModal()),
    deleteModal: () => dispatch(deleteBoardModal()),
    closeModal: () => dispatch(closeModal()),
    createPinModal: () => dispatch(createPinModal()),
    createPin: formData => dispatch(createPin(formData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
