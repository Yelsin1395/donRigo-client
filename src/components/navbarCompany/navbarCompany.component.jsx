import React from "react";
import { LogoOficial } from "../../assets";
import "./navbarCompany.style.scss";

const NavbarCompany = () => {
  return (
    <div className="content-navbarCompany">
      <img
        className="img-navbarCompany"
        src={LogoOficial}
        alt="Logo Don Rigo"
      />
    </div>
  );
};

export default NavbarCompany;
