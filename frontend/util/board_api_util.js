export const fetchBoard = boardId => {
  return $.ajax({
    method: 'get',
    url: `/api/boards/${boardId}`
  });
};
