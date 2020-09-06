import React from "react";
import "./searchLocation.style.scss";

const SearchLocation = () => {
  return (
    <from className="content-searchLocation">
      <div className="container grid-md">
        <div className="columns">
          <div className="column col-12 col-sm-12">
            <h1 className="title-country-location">Perú</h1>
          </div>

          <div className="column col-4 col-sm-6">
            <div className="form-group">
              <select className="input-from2-donRigo" value="">
                <option value="">Departamento</option>
              </select>
            </div>
          </div>

          <div className="column col-4 col-sm-6">
            <select className="input-from2-donRigo" value="">
              <option value="">Distrito</option>
            </select>
          </div>

          <div className="column col-4 col-sm-6">
            <select className="input-from2-donRigo" value="">
              <option value="">Provincia</option>
            </select>
          </div>
        </div>
      </div>
    </from>
  );
};

export default SearchLocation;
