export const fetchUser = userId => {
  return $.ajax({
    method: "get",
    url: `api/users/${userId}`
  });
};

export const updateUserProfile = (formData, userId) => {
  return $.ajax({
    method: "patch",
    url: `api/users/${userId}`,
    contentType: false,
    processData: false,
    data: formData
  });
};
