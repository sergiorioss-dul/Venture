import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import userContext from "../../context/user/userContext";

const RoutePrivate = ({ component: Component, ...props }) => {
  const userCont = useContext(userContext);
  const { token } = userCont;

  return (
    <Route
      {...props}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default RoutePrivate;
