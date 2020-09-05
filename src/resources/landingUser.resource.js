import React, { Fragment } from "react";
import { NavbarUser, Footer } from "../components";

const LandingUser = ({ children }) => {
  return (
    <Fragment>
      <NavbarUser />
      {children}
      <Footer />
    </Fragment>
  );
};

export default LandingUser;
