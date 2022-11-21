import React from "react";
import "./nav.css";

const Nav = (props) => {
  return (
    <div nav-bar>
      <h1 className="rainbow-text">Catch Me If You Can</h1>
      <nav>
        <ul>
          <li>
            <span>Help</span>
          </li>
          <li>
            <h1></h1>
          </li>
          <li>
            &#8987; | <span>{props.rounds}</span>
          </li>
          <li>
            Score | <span>{props.score}</span>
          </li>
          <li>
            Recovered &#128181; | <span>€ {props.recover}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
