import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import LogoutContainer from './logout/logout_container';
import UserShowContainer from './users/user_container';

const TestComponent = () => {
  return(
    <div>
      <nav>
        <LogoutContainer />
      </nav>
    </div>
  );
};

const App = ({ currentUser }) => {
  return(
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <ProtectedRoute path='/user/:userId' component={UserShowContainer} />
      <ProtectedRoute path="/" component={TestComponent} />
    </Switch>
  );
};



export default App;
