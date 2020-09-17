import React, { Fragment, useState } from "react";
import "./createCategory.style.scss";
import { LandingCompany } from "../../../resources";
import { Bell, Options, Undo, TrashEmpty } from "css.gg";
import { Tape } from "../../../components";

const CreateCategory = () => {
  const [toggle, setToggle] = useState(false);

  const openHandle = (e) => {
    setToggle(true);
  };

  const closeHandle = (e) => {
    setToggle(false);
  };

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

            <form style={{ width: "100%" }}>
              <div className="column col-12 col-sm-12">
                <input
                  type="text"
                  className="input-from2-donRigo"
                  placeholder="Nombre de la categoría"
                />
              </div>

              <div
                className="column col-12 text-center"
                style={{ marginBottom: "20px" }}
              >
                <button
                  type="button"
                  className="btn-primary-donRigo"
                  onClick={openHandle}
                >
                  Agregar plato
                </button>
              </div>

              <div className="column col-12" style={{ marginBottom: "20px" }}>
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

              <div
                className="group-from-company"
                style={toggle ? { bottom: "0" } : { bottom: "-999em" }}
              >
                <div className="columns">
                  <div className="column col-12">
                    <input
                      type="text"
                      className="input-from3-donRigo"
                      style={{ textTransform: "capitalize" }}
                      placeholder="Nombre del plato"
                    />
                  </div>

                  <div className="column col-12">
                    <textarea
                      className="input-from3-donRigo"
                      placeholder="Nombre de la categoría"
                      rows="3"
                    ></textarea>
                  </div>

                  <div className="column col-6">
                    <input
                      type="number"
                      className="input-from3-donRigo"
                      placeholder="S/. Precio"
                    />
                  </div>

                  <div className="column col-6">
                    <input
                      type="number"
                      className="input-from3-donRigo"
                      placeholder="% Descuento"
                      min="0"
                      max="100"
                    />
                  </div>

                  <div className="column col-6 text-center">
                    <button
                      type="button"
                      className="btn-secundary-donRigo"
                      style={{ background: "#ff304f", color: "white" }}
                      onClick={closeHandle}
                    >
                      Cancelar
                    </button>
                  </div>

                  <div className="column col-6 text-center">
                    <button type="button" className="btn-primary-donRigo">
                      Crear plato
                    </button>
                  </div>
                </div>
              </div>

              <div className="column col-12 text-center">
                <button
                  type="button"
                  className="btn-primary-donRigo"
                  style={{ marginBottom: "20px" }}
                >
                  Crear categoría
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LandingCompany>
  );
};

export default CreateCategory;
