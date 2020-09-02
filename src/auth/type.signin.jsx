import React from "react";
import { LogoOficial } from "../assets";
import "./login.scss";

const TypeSignin = () => {
  return (
    <div className="content-type-signin content-login">
      <img className="img-logoOficial" src={LogoOficial} alt="Logo Don Rigo" />
      <button className="btn-primary-donRigo">Usuario</button>
      <button className="btn-primary-donRigo">Empresa</button>
    </div>
  );
};

export default TypeSignin;
