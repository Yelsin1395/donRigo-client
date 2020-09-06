import React, { useState, useEffect } from "react";
import "./searchLocation.style.scss";
import { ubigeoController } from "../../controllers";

const getUbigeos = ubigeoController;

const SearchLocation = () => {
  const [ubigeo, setUbigeo] = useState([]);
  const [inputValue, setInputValue] = useState({
    departamento: "",
    provincia: "",
    distrito: "",
  });
  const { departamento, provincia } = inputValue;

  useEffect(() => {
    getUbigeos().then((res) => {
      setUbigeo(res.data);
    });
  }, []);

  const arrayDep = [];
  const repeatDep = {};

  ubigeo.forEach(
    (i) =>
      !(i.departamento in repeatDep) &&
      (repeatDep[i.departamento] = true) &&
      arrayDep.push({
        departamento: i.departamento,
        nombre: i.nombre,
      })
  );

  let pro = ubigeo.filter(
    (u, i) => u.departamento === departamento && u.distrito === "01"
  );

  let dis = ubigeo.filter(
    (u, i) =>
      u.departamento === departamento &&
      u.provincia === provincia &&
      u.distrito > "00"
  );

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // console.log(inputValue);

  return (
    <form className="content-searchLocation">
      <div className="container grid-md">
        <div className="columns">
          <div className="column col-12 col-sm-12">
            <h1 className="title-country-location">Perú</h1>
          </div>

          <div className="column col-4 col-sm-12">
            <div className="form-group">
              <select
                className="input-from2-donRigo"
                name="departamento"
                defaultValue=""
                onChange={inputChange}
              >
                <option className="option-from-donRigo" value="">
                  Departamento
                </option>
                {arrayDep.map((d, i) => {
                  return (
                    <option
                      key={d.departamento}
                      className="option-from-donRigo"
                      value={d.departamento}
                    >
                      {d.nombre}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="column col-4 col-sm-12">
            {departamento === "" ? (
              <select className="input-from2-donRigo" name="provincia" disabled>
                <option className="option-from-donRigo" value="">
                  Provincia
                </option>
              </select>
            ) : (
              <select
                className="input-from2-donRigo"
                name="provincia"
                onChange={inputChange}
                defaultValue=""
              >
                <option className="option-from-donRigo" value="">
                  Provincia
                </option>
                {pro.map((p, i) => {
                  return (
                    <option
                      key={p.provincia}
                      className="option-from-donRigo"
                      value={p.provincia}
                    >
                      {p.nombre}
                    </option>
                  );
                })}
              </select>
            )}
          </div>

          <div className="column col-4 col-sm-12">
            {provincia === "" ? (
              <select className="input-from2-donRigo" name="distrito" disabled>
                <option className="option-from-donRigo" value="">
                  Distrito
                </option>
              </select>
            ) : (
              <select
                className="input-from2-donRigo"
                name="distrito"
                onChange={inputChange}
              >
                <option className="option-from-donRigo" value="">
                  Distrito
                </option>
                {dis.map((d, i) => {
                  return (
                    <option
                      key={d.distrito}
                      className="option-from-donRigo"
                      value={d.distrito}
                    >
                      {d.nombre}
                    </option>
                  );
                })}
              </select>
            )}
          </div>

          <div className="column col-12">
            <button
              type="submit"
              className="btn-primary-donRigo p-centered"
              style={{ marginBottom: "20px" }}
            >
              Buscar locales cerca
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchLocation;
