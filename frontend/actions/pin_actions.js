import * as PinApiUtil from "../util/pin_api_util";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const RECEIVE_ALL_PINS = "RECEIVE_ALL_PINS";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";
export const CLEAR_PINS = "CLEAR_PINS";

export const receivePin = pin => {
  return {
    type: RECEIVE_PIN,
    pin
  };
};

export const receiveAllPins = payload => {
  return {
    type: RECEIVE_ALL_PINS,
    pins: payload.pins,
    pinOrder: payload.pinOrder
  };
};

export const removePin = pinId => {
  return {
    type: REMOVE_PIN,
    pinId
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_PIN_ERRORS,
    errors
  };
};

export const clearPins = () => {
  return {
    type: CLEAR_PINS
  };
};

export const fetchPin = pinId => dispatch => {
  return PinApiUtil.fetchPin(pinId).then(pin => dispatch(receivePin(pin)));
};

export const fetchPins = (pageNum) => dispatch => {
  return PinApiUtil.fetchPins(pageNum).then(pins => dispatch(receiveAllPins(pins)));
};

export const createPin = formData => dispatch => {
  return PinApiUtil.createPin(formData).then(
    pin => dispatch(receivePin(pin)),
    err => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updatePin = pin => dispatch => {
  return PinApiUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)));
};

export const deletePin = pinId => dispatch => {
  return PinApiUtil.deletePin(pinId).then(() => dispatch(removePin(pinId)));
};
