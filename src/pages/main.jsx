import React, { useState } from "react";

import { LandingUser } from "../resources";
import { SearchLocation } from "../components";
import { navigatorPromise } from "../controllers";

const Main = () => {
  const [geolocation, setGeolocation] = useState({});

  navigatorPromise.then((response) => setGeolocation(response));
  const { lat, lng } = geolocation;
  // console.log(lat, lng);

  return (
    <LandingUser>
      {"geolocation" in navigator ? (
        <SearchLocation latitude={lat} longitude={lng} />
      ) : (
        <SearchLocation latitude={""} longitude={""} />
      )}
    </LandingUser>
  );
};

export default Main;
