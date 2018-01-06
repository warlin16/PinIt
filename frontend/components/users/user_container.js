import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    boards: Object.values(state.entities.boards),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
