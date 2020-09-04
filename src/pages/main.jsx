import React, { Fragment, useState, useEffect } from "react";
import { NavbarUser } from "../components";
import Map from "../components/maps/maps.component";

// const mapKey = "AIzaSyAuCOk0i5KrN8ve89V2rI4erUOvK_NrTc4";

const navigatorPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        resolve(location);
      });
    } else {
      reject("Error: Geolocalización no econtrada");
    }
  });
});

const Main = () => {
  const [ubigeo, setUbigeo] = useState({});

  useEffect(() => {
    navigatorPromise.then((resul) => {
      setUbigeo(resul);
    });
  });

  const { lat, lng } = ubigeo;

  return (
    <Fragment>
      <NavbarUser />
      {/* {console.log(ubigeo)} */}
      <span>
        Latitud: {lat} and longitud: {lng}
      </span>
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.ex&key=AIzaSyAuCOk0i5KrN8ve89V2rI4erUOvK_NrTc4`}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando...</p>}
        latitud={lat}
        longitude={lng}
      />
    </Fragment>
  );
};

export default Main;
