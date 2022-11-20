import React from "react";
import "./circle.css";

const Circle = (props) => {
  return (
    <div
      onClick={props.gameOnStatus ? props.click : null}
      style={{
        pointerEvents: props.gameOnStatus ? "all" : "none",
      }}
      className={`circle ${props.active ? "selected vibrate" : ""}`}
    ></div>
  );
};

export default Circle;
