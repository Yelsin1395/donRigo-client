import React, { Fragment } from "react";
import { NavbarCompany, Footer } from "../components";

const LandingCompany = ({ children }) => {
  return (
    <Fragment>
      <NavbarCompany />
      {children}
      <Footer />
    </Fragment>
  );
};

export default LandingCompany;
