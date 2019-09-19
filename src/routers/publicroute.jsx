import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  const user = useSelector(state => state.authentication);
  isAuthenticated = !!user.uid;
  console.log("public", isAuthenticated);
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Redirect to="/welcome" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
