import React from "react";
import { LogoOficial } from "../../assets";
import "./signinCompany.style.scss";
import { Link } from "react-router-dom";

const SigninCompany = () => {
  return (
    <div className="content-signinCompany">
      <Link to="/">
        <img
          className="img-logoOficial"
          loading="lazy"
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
            id="nameCompnay-signinCompany"
          />
          <label htmlFor="nameCompnay-signinCompany" className="title-form">
            Nombre del local
          </label>
        </div>

        <div className="input-group-donRigo">
          <select
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="heading-signinCompany"
          >
            <option>Seleccione</option>
          </select>
          <label htmlFor="heading-signinCompany" className="title-form">
            Rubro
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="email"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="email-signinCompany"
          />
          <label htmlFor="email-signinCompany" className="title-form">
            Correo electrónico
          </label>
        </div>

        <div className="input-group-donRigo">
          <select
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="department-signinCompany"
          >
            <option>Seleccione</option>
          </select>
          <label htmlFor="department-signinCompany" className="title-form">
            Departamento
          </label>
        </div>

        <div className="input-group-donRigo">
          <select
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="province-signinCompany"
          >
            <option>Seleccione</option>
          </select>
          <label htmlFor="province-signinCompany" className="title-form">
            Provincia
          </label>
        </div>

        <div className="input-group-donRigo">
          <select
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="district-signinCompany"
          >
            <option>Seleccione</option>
          </select>
          <label htmlFor="district-signinCompany" className="title-form">
            Distrito
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="text"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="address-signinCompany"
          />
          <label htmlFor="address-signinCompany" className="title-form">
            Dirección
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="password"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="password-signinCompany"
          />
          <label htmlFor="password-signinCompany" className="title-form">
            Contraseña
          </label>
        </div>

        <div className="input-group-donRigo">
          <input
            type="password"
            className="input-form-donRigo"
            style={{ padding: "25px 10px 0 10px" }}
            id="repeatPassword-signinCompany"
          />
          <label htmlFor="repeatPassword-signinCompany" className="title-form">
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

export default SigninCompany;
