import React from "react";
import "./circle.css";

const Circle = (props) => {
  return (
    <div
      onClick={props.click}
      className={`circle ${props.active ? "selected" : ""}`}
    >
      <p>{props.id}</p>
    </div>
  );
};

export default Circle;
