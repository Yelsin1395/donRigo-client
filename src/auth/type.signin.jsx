import React from "react";
import { LogoOficial } from "../assets";
import "./login.scss";
import { Link } from "react-router-dom";

const TypeSignin = () => {
  return (
    <div className="content-type-signin content-login">
      <img className="img-logoOficial" src={LogoOficial} alt="Logo Don Rigo" />
      <Link to="/signin/typeuser/user">
        <button className="btn-primary-donRigo" style={{ width: "200px" }}>
          Usuario
        </button>
      </Link>
      <button className="btn-primary-donRigo" style={{ width: "200px" }}>
        Empresa
      </button>
    </div>
  );
};

export default TypeSignin;
