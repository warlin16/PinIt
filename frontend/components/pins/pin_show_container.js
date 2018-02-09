import { connect } from "react-redux";
import { fetchPin } from "../../actions/pin_actions";
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
    fetchPin: pinId => dispatch(fetchPin(pinId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
