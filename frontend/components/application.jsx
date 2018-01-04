import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './sessions/session_form_container';
import LogoutContainer from './logout/logout_container';

const TestComponent = () => {
  return(
    <div>
      <nav>
        <LogoutContainer />
      </nav>
    </div>
  );
};

const SecondTestComponent = () => {
  return (
    <div>
      <h1>This is where eventually I'll show the user details lol</h1>
      <Link to='/'>Back to feed BRO</Link>
    </div>
  );
};

const App = ({ currentUser }) => {
  return(
    <Switch>
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path='/login' component={SessionFormContainer} />
      <ProtectedRoute path='/user/:userId' component={SecondTestComponent} />
      <ProtectedRoute path="/" component={TestComponent} />
    </Switch>
  );
};



export default App;
