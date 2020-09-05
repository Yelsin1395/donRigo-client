import React, { useState } from "react";
import { navigatorPromise } from "../controllers";
import { googleMapsApi } from "../apis";
import { LandingUser } from "../resources";
import Map from "../components/maps/maps.component";

const Main = () => {
  const [ubigeo, setUbigeo] = useState({});

  navigatorPromise.then((resul) => {
    setUbigeo(resul);
  });

  const { lat, lng } = ubigeo;

  return (
    <LandingUser>
      <Map
        googleMapURL={googleMapsApi}
        containerElement={<div style={{ height: "400px" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        loadingElement={<p>Cargando...</p>}
        latitud={lat}
        longitude={lng}
      />
    </LandingUser>
  );
};

export default Main;
