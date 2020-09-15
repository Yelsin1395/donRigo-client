import React from "react";
import "./footer.style.scss";
import { LogoBlanco } from "../../assets";
import { version } from "../../../package.json";

const Footer = () => {
  return (
    <div className="content-footer">
      <img src={LogoBlanco} alt="Logo Don Rigo Blanco" />
      <p>
        Hecho por{" "}
        <a href="http://www.aluvadesign.com/" target="__blank">
          <b>Aluva Design</b>
        </a>{" "}
        <br />
        v.{version}
      </p>
    </div>
  );
};

export default Footer;
