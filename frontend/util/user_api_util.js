export const fetchUser = userId => {
  return $.ajax({
    method: "get",
    url: `api/users/${userId}`
  });
};

export const updateUser = user => {
  return $.ajax({
    method: "patch",
    url: `api/users/${user.id}`,
    data: { user }
  });
};
