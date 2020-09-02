import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "../pages";
import { Login, TypeSignin } from "../auth";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin/typeuser" component={TypeSignin} />
        <Route component={() => <p>Error 404...</p>} />
      </Switch>
    </Router>
  );
};

export default App;
