import { connect } from 'react-redux';
import PinIndex from './pin_index';
import { fetchPins } from '../../actions/pin_actions';


const mapStateToProps = ({ entities }, ownProps) => {
  return{
    pins: Object.values(entities.pins),
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPins: () => dispatch(fetchPins()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);
