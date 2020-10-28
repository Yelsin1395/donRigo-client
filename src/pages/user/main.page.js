import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { LandingUser } from "../../resources";
import { SearchLocation, CardPrimary } from "../../components";
import { navigatorPromise } from "../../controllers";
import { Search, Qr, Calibrate } from "css.gg";

const Main = () => {
  const [geolocation, setGeolocation] = useState({});

  navigatorPromise.then((response) => setGeolocation(response));
  const { lat, lng } = geolocation;

  return (
    <LandingUser>
      {"geolocation" in navigator ? (
        <SearchLocation latitude={lat} longitude={lng} />
      ) : (
        <SearchLocation latitude={""} longitude={""} />
      )}

      <div className="container grid-md">
        <div className="columns">
          <div className="content-btnFloat-donRigo">
            <button className="floatBtn-donRigo" title="Buscar local">
              <Search style={{ transform: "scale(1.5)" }} />
            </button>

            <button className="floatBtn-donRigo" title="Filtro">
              <Calibrate style={{ transform: "scale(1.3)" }} />
            </button>

            <button className="floatBtn-donRigo" title="Scanner de QR">
              <Qr style={{ transform: "scale(1.5)" }} />
            </button>
          </div>
          <div className="column col-12 col-sm-12">
            <Masonry
              breakpointCols={{ default: 3, 575.98: 2 }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              <CardPrimary
                link="/detailBusiness/1"
                profileBusiness="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                state="open"
                calification="4.8"
                name="D'chota"
                type="Restaurante"
                direction="av. panamericana norte km 80"
              />

              <CardPrimary
                link="/detailBusiness/2"
                profileBusiness="https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                state="close"
                calification="4.8"
                name="La B"
                type="Pastelería"
                direction="av. panamericana norte km 80"
              />
            </Masonry>
          </div>
        </div>
      </div>
    </LandingUser>
  );
};

export default Main;
