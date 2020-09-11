import React from "react";
import "./cardPrimary.style.scss";

const CardPrimary = ({
  profileBusiness,
  state,
  calification,
  name,
  type,
  direction,
}) => {
  return (
    <div className="content-cardPrimary">
      <img
        className="img-cardPrimary-business"
        src={profileBusiness}
        alt="Logo empresa"
      />
      <p
        className="state-cardPrimary"
        style={{ background: state === "open" ? "#17b978" : " #ff304f" }}
      />
      <div className="content-ifo-business-cardPrimary">
        <div className="califc-business">{calification}</div>
        <p className="title-cardPrimary">{name}</p>
        <p className="type-cardPrimary">{type}</p>
        <p className="direction-cardPrimary">{direction}</p>
      </div>
    </div>
  );
};

export default CardPrimary;
