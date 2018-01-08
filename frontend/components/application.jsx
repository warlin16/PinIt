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
    <div className='Testing'>
      Hello human!
    </div>
  );
};

const SecondComponent = () => {
  return(
    <div className='Testing'>
      You've found me human!
    </div>
  )
}

const App = ({ currentUser }) => {
  return(
    <div>
      <LogoutContainer />
      <Switch>
        <AuthRoute path="/signup" component={SessionFormContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <ProtectedRoute exact path='/user/:userId' component={UserShowContainer} />
        <ProtectedRoute path='/user/board/:boardId' component={SecondComponent} />
        <ProtectedRoute path="/" component={TestComponent} />
      </Switch>
    </div>
  );
};



export default App;
