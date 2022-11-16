import React from "react";
import "./gameOver.css";

const GameOver = (props) => {
  return (
    <div className="modal-container">
      <div className="modal">
        <small onClick={props.close}>X</small>
        <h3>Game Over</h3>
        <p>
          You Score is: {props.score} --
          <span>{`${
            props.score >= 10 ? "Good game" : "Too poor, try harder"
          }`}</span>
        </p>
      </div>
    </div>
  );
};

export default GameOver;
