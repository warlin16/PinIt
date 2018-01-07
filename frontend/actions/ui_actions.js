export const CREATE_BOARD_MODAL = 'CREATE_BOARD_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const createBoardModal = () => {
  return {
    type: CREATE_BOARD_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
  };
};
