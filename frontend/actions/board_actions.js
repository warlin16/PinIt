import * as BoardApiUtil from "../util/board_api_util";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const REMOVE_BOARD = "REMOVE_BOARD";

export const removeBoard = boardId => {
  return {
    type: REMOVE_BOARD,
    boardId
  };
};

export const receiveBoard = board => {
  return {
    type: RECEIVE_BOARD,
    board
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_BOARD_ERRORS,
    errors
  };
};

export const fetchBoard = boardId => dispatch => {
  return BoardApiUtil.fetchBoard(boardId).then(board =>
    dispatch(receiveBoard(board))
  );
};

export const createBoard = board => dispatch => {
  return BoardApiUtil.createBoard(board).then(
    board => dispatch(receiveBoard(board)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateBoard = board => dispatch => {
  return BoardApiUtil.updateBoard(board).then(
    board => dispatch(receiveBoard(board)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteBoard = boardId => dispatch => {
  return BoardApiUtil.deleteBoard(boardId).then(() =>
    dispatch(removeBoard(boardId))
  );
};
