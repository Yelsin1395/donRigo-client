import React, { useState, useEffect } from "react";
import "./searchLocation.style.scss";
import { ubigeoController, getGeodirGeocoding } from "../../controllers";

const getUbigeos = ubigeoController;

const SearchLocation = ({ latitude, longitude }) => {
  const [ubigeo, setUbigeo] = useState([]);
  const [inputValue, setInputValue] = useState({
    country: "",
    departament: "",
    province: "",
    district: "",
  });
  const { country, departament, province, district } = inputValue;

  if (latitude !== "" && longitude !== "") {
    getGeodirGeocoding(latitude, longitude)
      .then((res) => {
        if (res !== undefined) {
          const fun = setTimeout(() => {
            let codeCountry = res.country;
            let codeDep = res.ubigeo[0];
            let codePro = res.ubigeo[1];
            let codeDis = res.ubigeo[2];
            setInputValue({
              ...inputValue,
              country: codeCountry,
              departament: codeDep,
              province: codePro,
              district: codeDis,
            });
          });

          if (
            inputValue.country !== "" &&
            inputValue.departament !== "" &&
            inputValue.district !== ""
          ) {
            clearTimeout(fun);
          }
        }
      })
      .catch((error) => console.log(error));
  }

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
    (u, i) => u.departamento === departament && u.distrito === "01"
  );

  let dis = ubigeo.filter(
    (u, i) =>
      u.departamento === departament &&
      u.provincia === province &&
      u.distrito > "00"
  );

  const inputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <form className="content-searchLocation">
      <div className="container grid-md">
        <div className="columns">
          <div className="column col-12 col-sm-12">
            <h1 className="title-country-location">{country}</h1>
          </div>

          <div className="column col-4 col-sm-12">
            <div className="form-group">
              <select
                className="input-from2-donRigo"
                name="departament"
                value={departament}
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
            {departament === "" ? (
              <select className="input-from2-donRigo" name="province" disabled>
                <option className="option-from-donRigo" value="">
                  Provincia
                </option>
              </select>
            ) : (
              <select
                className="input-from2-donRigo"
                name="province"
                onChange={inputChange}
                value={province}
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
            {province === "" ? (
              <select className="input-from2-donRigo" name="district" disabled>
                <option className="option-from-donRigo" value="">
                  Distrito
                </option>
              </select>
            ) : (
              <select
                className="input-from2-donRigo"
                name="district"
                value={district}
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
