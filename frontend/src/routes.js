import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuth } from './auth';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuth ? (
      <Component {...rest} />
    ) : (
        <Redirect to="/" />
      )
  )} />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  )
}