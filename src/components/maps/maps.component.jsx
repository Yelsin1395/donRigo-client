import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const Map = (props) => {
  if (props.latitud !== undefined && props.longitude !== undefined) {
    return (
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat: props.latitud, lng: props.longitude }}
      >
        <Marker
          position={{ lat: props.latitud, lng: props.longitude }}
          title={`Estas es tu posición actual. Latitud: ${parseFloat(
            props.latitud
          ).toFixed(3)} y Longitud: ${parseFloat(props.longitude).toFixed(3)}`}
        />
      </GoogleMap>
    );
  } else {
    return (
      <p>
        El componente está cargando o no ha aceptado permisos de geolocalización
      </p>
    );
  }
};

export default withScriptjs(withGoogleMap(Map));
