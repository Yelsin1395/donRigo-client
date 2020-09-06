import React from "react";

import { LandingUser } from "../resources";
import { SearchLocation } from "../components";

const Main = () => {
  return (
    <LandingUser>
      <SearchLocation />
    </LandingUser>
  );
};

export default Main;
