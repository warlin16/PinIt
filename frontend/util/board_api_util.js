export const fetchBoard = boardId => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}`
  });
};

export const createBoard = board => {
  return $.ajax({
    method: 'post',
    url: `/api/boards`,
    data: { board }
  });
};

export const updateBoard = board => {
  return $.ajax({
    method: 'post',
    url: `/api/boards/${board.id}`,
    data: { board }
  });
};
