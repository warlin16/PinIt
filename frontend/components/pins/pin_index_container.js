import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins } from '../../actions/pin_actions';


const mapStateToProps = (state, ownProps) => {
  return{
    pins: Object.values(state.entities.pins),
    pinOrder: state.ui.pinOrder
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPins: () => dispatch(fetchPins()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
