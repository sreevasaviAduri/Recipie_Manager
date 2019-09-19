import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const uuid = useSelector(state => state.authentication.uid);
  isAuthenticated = !!uuid;
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
