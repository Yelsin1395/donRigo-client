import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, TypeSignin, SigninUser, SigninCompany } from "../auth";
import { DetailBusiness, Main, OrderDetail } from "../pages";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin/typeuser" component={TypeSignin} />
        <Route exact path="/signin/typeuser/user" component={SigninUser} />
        <Route exact path="/detailBusiness/:id" component={DetailBusiness} />
        <Route
          exact
          path="/orderDetail"
          component={OrderDetail}
        />
        <Route
          exact
          path="/signin/typeuser/company"
          component={SigninCompany}
        />
        <Route component={() => <p>Error 404...</p>} />
      </Switch>
    </Router>
  );
};

export default App;
