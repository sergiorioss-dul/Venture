import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Panel from "./components/Panel";
import UserState from "./context/user/userState";
import Album from "./components/Album";
import Galery from "./components/layout/Galery";
import RoutePrivate from "./components/route/RoutePrivate";

function App() {
  return (
    <UserState>
      <Router>
        <Switch>
          <RoutePrivate path="/panel-users/albums/:id" component={Galery} />
          <RoutePrivate path="/panel-users/albums/" component={Album} />
          <Route exact path="/" component={Login} />
          <RoutePrivate exact path="/panel-users/" component={Panel} />
        </Switch>
      </Router>
    </UserState>
  );
}

export default App;
