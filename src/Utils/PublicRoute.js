import React from "react";
import { Redirect, Route } from "react-router";
import { getToken } from "./Common";
const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return !getToken() ? (
          <Component {...props} />
        ) : (
          // <Redirect to={{ pathname: "/bookslist" }} />
          props.history.push("/bookslist")
        );
      }}
    />
  );
};

export default PublicRoute;
