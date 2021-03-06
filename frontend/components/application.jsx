import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import LogoutContainer from './logout/logout_container';
import UserShowContainer from './users/user_container';
import BoardShowContainer from './boards/board_show_container';
import PinShowContainer from './pins/pin_show_container';
import PinIndexContainer from './pins/pin_index_container';

const App = ({ currentUser }) => {
  return(
    <div>
      <LogoutContainer />
      <Switch>
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <ProtectedRoute exact path='/pin/:pinId' component={PinShowContainer} />
        <ProtectedRoute exact path='/user/:userId/pins' component={UserShowContainer} />
        <ProtectedRoute exact path='/user/:userId' component={UserShowContainer} />
        <ProtectedRoute path='/user/:userId/board/:boardId' component={BoardShowContainer} />
        <ProtectedRoute path="/" component={PinIndexContainer} />
      </Switch>
    </div>
  );
};



export default App;
