import React from "react";

const Nav = (props) => {
  return (
    <div nav-bar>
      <nav>
        <ul>
          <li>help</li>
          <li>Catch Me If You Can</li>
          <li>
            Rounds: <span>{props.rounds}</span>
          </li>
          <li>
            Score: <span>{props.score}</span>
          </li>
          <li>
            Recovered &#128181;:
            <span>{props.recover}</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
