import { connect } from "react-redux";
import { fetchPin, updatePin } from "../../actions/pin_actions";
import { updatePinModal, closeModal } from "../../actions/ui_actions";
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
    updatePin: pin => dispatch(updatePin(pin))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
