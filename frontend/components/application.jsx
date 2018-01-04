import React from 'react';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import LogoutContainer from './logout/logout_container';

const TestComponent = () => {
  return(
    <h1> I should Only render If you're logged in.</h1>
  );
};

const SecondTestComponent = () => {
  return (
    <h1>This is where eventually I'll show the user details lol</h1>
  );
};
const App = () => {
  return(
    <div>
      <nav className={`main-nav`}>
        <LogoutContainer />
      </nav>
      <AuthRoute path='/login' component={SessionFormContainer} />
      <ProtectedRoute path='/' component={TestComponent} />
      <ProtectedRoute path='/user/:userId' component={SecondTestComponent} />
    </div>
  );
};

export default App;
