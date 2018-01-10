import * as PinApiUtil from '../util/pin_api_util'
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const REMOVE_PIN = 'REMOVE_PIN';

export const receivePin = pin => {
  return{
    type: RECEIVE_PIN,
    pin
  };
};

export const receiveAllPins = pins => {
  return{
    type: RECEIVE_ALL_PINS,
    pins
  };
};

export const removePin = pinId => {
  return{
    type: REMOVE_PIN,
    pinId
  };
};

export const fetchPin = pinId => dispatch => {
  return PinApiUtil.fetchPin(pinId).then(pin => dispatch(receivePin(pin)));
}

export const fetchPins = () => dispatch => {
  return PinApiUtil.fetchPins().then(pins => dispatch(receiveAllPins(pins)));
}

export const createPin = pin => dispatch => {
  return PinApiUtil.createPin(pin).then(pin => dispatch(receivePin(pin)));
}

export const updatePin = pin => dispatch => {
  return PinApiUtil.updatePin(pin).then(pin => dispatch(receivePin(pin)));
}

export const deletePin = pinId => dispatch => {
  return PinApiUtil.deletePin(pinId).then(() => dispatch(removePin(pinId)));
}
