export const CREATE_BOARD_MODAL = "CREATE_BOARD_MODAL";
export const UPDATE_BOARD_MODAL = "UPDATE_BOARD_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const DELETE_BOARD_MODAL = "DELETE_BOARD_MODAL";
export const CREATE_PIN_MODAL = "CREATE_PIN_MODAL";
export const UPDATE_PIN_MODAL = "UPDATE_PIN_MODAL";
export const DELETE_PIN_MODAL = "DELETE_PIN_MODAL";

export const createBoardModal = () => {
  return {
    type: CREATE_BOARD_MODAL
  };
};

export const updateBoardModal = () => {
  return {
    type: UPDATE_BOARD_MODAL
  };
};

export const deleteBoardModal = () => {
  return {
    type: DELETE_BOARD_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

export const createPinModal = () => {
  return {
    type: CREATE_PIN_MODAL
  };
};

export const updatePinModal = () => {
  return {
    type: UPDATE_PIN_MODAL
  };
};

export const deletePinModal = () => {
  return {
    type: DELETE_PIN_MODAL
  };
};
