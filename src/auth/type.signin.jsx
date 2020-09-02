import React from "react";
import { LogoOficial } from "../assets";
import "./login.scss";
import { Link } from "react-router-dom";

const TypeSignin = () => {
  return (
    <div className="content-type-signin content-login">
      <Link to="/">
        <img
          className="img-logoOficial"
          loading="lazy"
          src={LogoOficial}
          alt="Logo Don Rigo"
        />
      </Link>
      <Link to="/signin/typeuser/user">
        <button className="btn-primary-donRigo" style={{ width: "200px" }}>
          Usuario
        </button>
      </Link>
      <Link to="/signin/typeuser/company">
        <button className="btn-primary-donRigo" style={{ width: "200px" }}>
          Empresa
        </button>
      </Link>
    </div>
  );
};

export default TypeSignin;
