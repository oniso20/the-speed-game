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
        <div
          className="emotion"
          style={{
            background:
              props.score >= 10
                ? "url(https://media1.giphy.com/media/m9rMVyKactNK/giphy.gif) no-repeat center/cover"
                : "url(https://media3.giphy.com/media/8rVh6kmGklEmQ/giphy.gif) no-repeat center/cover",
          }}
        ></div>
      </div>
    </div>
  );
};

export default GameOver;
