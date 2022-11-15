import React, { Component } from "react";
import "./App.css";
import "./button.css";
import Circle from "./Circle";
import Button from "./Button";

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: undefined,
    pace: 1000,
    gameOver: false,
    gameOn: false,
    rounds: 0,
    difficulty: 4,
  };

  timer;

  clickHandler = (index) => {
    if (this.state.current !== index) {
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 3) {
      this.stopHandler();
      return;
    }

    let nextActive;

    do {
      nextActive = randomNum(0, this.state.difficulty - 1);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startHandler = () => {
    this.nextCircle();
    console.log("game start");
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: !this.state.gameOver,
    });
    console.log("game stop");
  };

  closeHandler = () => {
    //this.setState({gameOver: !this.state.gameOver})
    window.location.reload();
    console.log("game stop");
  };

  render() {
    return (
      <main>
        <div className="gameInfo">
          <h1>VIRUS</h1>
          <h3>
            Your score is <span>{this.state.score}</span>
          </h3>
        </div>
        <div className="circles">
          {Array.from(Array(this.state.difficulty)).map((_, index) => (
            <Circle
              click={() => this.clickHandler(index)}
              key={index}
              id={index + 1}
              active={this.state.current === index}
            />
          ))}
        </div>
        {/* <GameOver close={this.closeHandler} /> */}
        <div className="buttons">
          <Button id="gameStart" start={this.startHandler} children={"Start"} />
          <Button id="gameStop" stop={this.stopHandler} children={"Stop"} />
        </div>
      </main>
    );
  }
}

export default App;
