import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  }
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1) || 'signup';
  const processForm = (formType === 'login') ? login : signup;
  const submitButton = (formType === 'login') ? 'Log In' : 'Join!';
  const formGreeting = (formType === 'login') ? 'Log in to see more' : 'Welcome to PinIt';
  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    submitButton,
    formGreeting,
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);
