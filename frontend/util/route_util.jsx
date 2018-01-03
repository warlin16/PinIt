import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import SessionFormContainer from '../components/sessions/session_form_container';

const Auth = ({component: Component, path, loggedIn}) => {
  return(
      <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props}/>
      ) : (
        <Redirect to="/" />
      )
    )} />
  );
};

const Protected = ({component: Component, path, loggedIn}) => {
  return(
      <Route path={path} render={(props) => (
       loggedIn ? (
        <Component {...props}/>
      ) : (
        <Route path={path}
          render={(props) => ( <SessionFormContainer {...props} /> )}
          />
      )
    )} />
  );
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
