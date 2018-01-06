import * as BoardApiUtil from '../util/board_api_util';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';

export const receiveBoard = board => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

export const fetchBoard = boardId => dispatch => {
  return BoardApiUtil.fetchBoard(boardId).then(board => dispatch(receiveBoard(board)));
}

export const fetchBoards = (userId) => dispatch => {
  return BoardApiUtil.fetchBoards(userId).then(boards => dispatch(receiveBoards(boards)));
}
