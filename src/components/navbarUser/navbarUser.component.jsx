import React from "react";
import "./navbarUser.style.scss";
import { LogoOficial } from "../../assets";
import { Link } from "react-router-dom";

const NavbarUser = () => {
  return (
    <nav className="content-navbar">
      <div className="content-img-nav">
        <Link to="/">
          <img className="img-nav" src={LogoOficial} alt="Logo Don Rigo" />
        </Link>
      </div>

      <div className="content-btn-nav">
        <Link to="/signin/typeuser" className="btn-login-default">
          Registrate
        </Link>
        <Link to="/login">
          <button className="btn-primary-donRigo">Inicar Sesión</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarUser;
