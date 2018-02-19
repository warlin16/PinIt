import { connect } from "react-redux";
import { fetchPin, updatePin, deletePin } from "../../actions/pin_actions";
import {
  updatePinModal,
  deletePinModal,
  pinItModal,
  closeModal
} from "../../actions/ui_actions";
import PinShow from "./pin_show";
import UpdatePinForm from "../modals/pin_update_modal";

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    currentUser: state.session.currentUser,
    pinModal: state.ui.pinModal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPin: pinId => dispatch(fetchPin(pinId)),
    editPin: () => dispatch(updatePinModal()),
    closeModal: () => dispatch(closeModal()),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePinModal: () => dispatch(deletePinModal()),
    deletePin: pinId => dispatch(deletePin(pinId)),
    pinIt: () => dispatch(pinItModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
