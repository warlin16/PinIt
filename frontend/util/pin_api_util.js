export const fetchPin = pinId => {
  return $.ajax({
    method: 'get',
    url: `/api/pins/${pinId}`
  });
};

export const fetchPins = pageNum => {
  return $.ajax({
    method: 'get',
    url: `/api/pins?pageNum=${pageNum}`
  });
};

export const createPin = formData => {
  return $.ajax({
    method: 'post',
    url: `/api/pins`,
    contentType: false,
    processData: false,
    data: formData
  });
};

export const updatePin = pin => {
  return $.ajax({
    method: 'patch',
    url: `/api/pins/${pin.id}`,
    data: { pin }
  });
};

export const deletePin = pinId => {
  return $.ajax({
    method: 'delete',
    url: `/api/pins/${pinId}`
  });
};
