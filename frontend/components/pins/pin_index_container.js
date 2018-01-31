import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins, clearPins } from '../../actions/pin_actions';


const mapStateToProps = (state, ownProps) => {
  return{
    pins: Object.values(state.entities.pins),
    pinOrder: state.ui.pinOrder
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPins: () => dispatch(fetchPins()),
    clearPins: () => dispatch(clearPins()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
