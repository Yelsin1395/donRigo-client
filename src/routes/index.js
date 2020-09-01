import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Main } from "../pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route component={() => <p>Error 404...</p>} />
      </Switch>
    </Router>
  );
};

export default App;
