import React, { Fragment } from "react";
import { Tape } from "../../components";
import { LandingCompany } from "../../resources";
import { TrashEmpty, Undo, Bell, Options } from "css.gg";
import { Link } from "react-router-dom";

const MyCardMenú = () => {
  return (
    <LandingCompany>
      <div className="container grid-md">
        <div className="columns">
          <div className="content-btnFloat-donRigo">
            <button className="floatBtn-donRigo" title="Notificaciones">
              <Bell style={{ transform: "scale(1.5)" }} />
            </button>

            <button className="floatBtn-donRigo" title="Configuración">
              <Options style={{ transform: "scale(1.3)" }} />
            </button>
          </div>

          <div className="colmun col-12 col-sm-12">
            <h1
              className="tittle-primary"
              style={{ textAlign: "center", marginTop: "10px" }}
            >
              Mi Carta Menú
            </h1>
          </div>

          <div className="column col-6 text-center">
            <Link to="/mainCompany/myCardMenu/createCategory">
              <button className="btn-primary-donRigo">Crear categoría</button>
            </Link>
          </div>

          <div className="column col-6 text-center">
            <button className="btn-primary-donRigo">Ver mi carta</button>
          </div>

          <div
            className="column col-12"
            style={{ marginTop: "20px", marginBottom: "20px" }}
          >
            <Tape
              name="Nombre de la categoría"
              controllers={
                <Fragment>
                  <button
                    type="button"
                    className="btn-tape"
                    style={{ background: "#ff940f" }}
                    title="Editar"
                  >
                    <Undo style={{ transform: "scale()" }} />
                  </button>
                  <button
                    type="button"
                    className="btn-tape"
                    style={{ background: "#ff304f" }}
                  >
                    <TrashEmpty
                      style={{ transform: "scale()" }}
                      title="Eliminar"
                    />
                  </button>
                </Fragment>
              }
            />
          </div>
        </div>
      </div>
    </LandingCompany>
  );
};

export default MyCardMenú;
