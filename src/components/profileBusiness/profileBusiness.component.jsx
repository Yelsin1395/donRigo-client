import React from "react";
import "./profileBusiness.style.scss";

const ProfileBusiness = ({
  imgProfile,
  calification,
  stateLocal,
  description,
  numberPhone,
  directionBusiness
}) => {
  return (
    <div className="content-profileBussines">
      <div className="content-img-calific">
        <img
          className="img-profileBusiness"
          src={imgProfile}
          alt={`Profile business name`}
        />
        <div className="califc-profileBusiness">{calification}</div>
      </div>
      <p className="state-profileBusiness" style={{ color: "#17b978" }}>
        {stateLocal}
      </p>

      {description}
      <br />
      <p className="phone-profileBusiness">
        <b>{numberPhone}</b>
      </p>
      <p className="direction-profileBusiness">
        <b>{directionBusiness}</b>
      </p>
    </div>
  );
};

export default ProfileBusiness;
