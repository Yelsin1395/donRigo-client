import React from "react";
import "./signinUser.style.scss";
import { LogoOficial } from "../../assets";
import { Link } from "react-router-dom";

const SigninUser = () => {
  return (
    <div className="content-signinUser">
      <Link to="/">
        <img
          className="img-logoOficial"
          src={LogoOficial}
          alt="Logo Don Rigo"
        />
      </Link>

      <form>
        <div className="input-group-donRigo">
          <input
            type="text"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="username-signinUser"
          />
          <label htmlFor="username-signinUser" className="title-form">
            Nombre Completos
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="email"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="email-signinUser"
          />
          <label htmlFor="email-signinUser" className="title-form">
            Correo electrónico
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="password"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="password-signinUser"
          />
          <label htmlFor="password-signinUser" className="title-form">
            Contraseña
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="password"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="repeatPassword-signinUser"
          />
          <label htmlFor="repeatPassword-signinUser" className="title-form">
            Repetir contraseña
          </label>
        </div>

        <div className="input-group-donRigo">
          <input type="checkbox" />
          <span style={{ marginLeft: "10px" }}>
            Deseo recibir ofertas de Don Rigo
          </span>
        </div>

        <div className="input-group-donRigo">
          <input type="checkbox" />
          <span style={{ marginLeft: "10px" }}>
            Acepto los terminos y condiciones
          </span>
        </div>

        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn-primary-donRigo">
            Registrarse
          </button>
        </div>
      </form>

      <p className="text-form">
        Si ya tienes cuenta,{" "}
        <Link to="/login" className="text-form-link">
          Inicia Sesión
        </Link>
      </p>
    </div>
  );
};

export default SigninUser;
