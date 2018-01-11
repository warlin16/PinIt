import { connect } from 'react-redux';
import PinShow from './pin_show';

const mapStateToProps = (state, ownProps) => {
  return {
    pin: state.entities.pins[ownProps.match.params.pinId],
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return{
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PinShow);
