import React from "react";
import "./login.scss";
import { LogoOficial } from "../assets";
import { Link } from "react-router-dom";
import { User, Lock } from "css.gg";

const Login = () => {
  return (
    <div className="content-login">
      <form className="content-form-donRigo">
        <Link to="/">
          <img
            className="img-logoOficial"
            src={LogoOficial}
            alt="Logo Don Rigo"
            loading="lazy"
          />
        </Link>
        <div className="input-group-donRigo">
          <input
            type="email"
            className="input-form-donRigo"
            style={{ padding: "25px 30px 0 10px" }}
            id="login-email"
          />
          <label htmlFor="login-email" className="title-form">
            Correo electrónico
          </label>
          <User
            style={{
              position: "absolute",
              bottom: "10px",
              right: "5px",
              transform: `scale(${1.3})`,
            }}
          />
        </div>

        <div className="input-group-donRigo">
          <input
            type="password"
            className="input-form-donRigo"
            style={{ padding: "25px 30px 0 10px" }}
            id="login-password"
          />
          <label htmlFor="login-email" className="title-form">
            Contraseña
          </label>
          <Lock
            style={{ position: "absolute", bottom: "20px", right: "7px" }}
          />
        </div>

        <button type="submit" className="btn-primary-donRigo">
          Iniciar Sesión
        </button>

        <p className="text-form">
          Si no tienes cuenta,{" "}
          <Link to="/signin/typeuser" className="text-form-link">
            regístrate
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
