import React from "react";
import btnStyle from "./button.css";

const Button = (props) => {
  return (
    <button
      onClick={props.start || props.stop}
      className={btnStyle.button}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
