import { connect } from 'react-redux';
import { fetchBoard,
         updateBoard,
         deleteBoard } from '../../actions/board_actions';
import BoardShow from './board_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    currentUser: state.session.currentUser,
  };
}

const mapDispatchToProps = dispatch => {
  return{
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardShow);
