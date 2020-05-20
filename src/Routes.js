import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Post, About, Home, NotFound } from "./pages";
import { DashBoard } from "./DashBoard";
import { useAuth } from "./storeApi";

export const Routes = () => {
  const { auth } = useAuth();
  return (
    <Switch>
      <ProtectedLogin exact path="/" component={Home} auth={auth} />
      <PrivateRoute exact path="/about" component={About} auth={auth} />
      <PrivateRoute exact path="/post" component={Post} auth={auth} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} auth={auth} />
      <Route exact component={NotFound} />
    </Switch>
  );
};

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

const ProtectedLogin = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        !auth ? <Component {...props} /> : <Redirect to="/dashboard" />
      }
    />
  );
};
