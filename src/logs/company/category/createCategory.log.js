import React from "react";
import { LandingCompany } from "../../../resources";
import { Bell, Options } from "css.gg";

const CreateCategory = () => {
  return (
    <LandingCompany>
      <div className="content-createCategory">
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
                Crear Categoría
              </h1>
            </div>

            <div className="column col-12 col-sm-12">
              <input
                type="text"
                className="input-from2-donRigo"
                placeholder="Nombre de la categoría"
              />
            </div>
          </div>
        </div>
      </div>
    </LandingCompany>
  );
};

export default CreateCategory;
