import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, {location}) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  const submitButton = (formType === 'login') ? 'Log In' : 'Join!';
  const formGreeting = (formType === 'login') ? 'Log in to see more' : 'Welcome to PinIt';
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    submitButton,
    formGreeting,
    clearError: () => dispatch(receiveErrors([])),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
