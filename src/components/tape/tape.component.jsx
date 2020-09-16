import React from "react";
import "./tape.style.scss";

const Tape = ({ name, controllers }) => {
  return (
    <div className="content-tape">
      <p>{name}</p>

      <div className="content-controllers">{controllers}</div>
    </div>
  );
};

export default Tape;
