import React, { Component } from "react";
import "./App.css";
import "./button.css";
import Circle from "./Circle";
import Button from "./Button";
import GameOver from "./GameOver";

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
    rounds: 3,
    difficulty: 4,
  };

  timer;

  clickHandler = (index) => {
    if (this.state.current !== index) {
      this.setState({
        rounds: this.state.rounds - 1,
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        rounds: this.state.rounds + 1,
      });
    }

    if (this.state.rounds === 0) {
      this.stopHandler();
      return;
    }
  };

  nextCircle = () => {
    if (this.state.rounds === 0) {
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
      rounds: this.state.rounds - 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameOn: !this.state.gameOn });
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameOver: !this.state.gameOver,
    });
  };

  closeHandler = () => {
    //this.setState({gameOver: !this.state.gameOver})
    window.location.reload();
  };

  render() {
    return (
      <main>
        <div className="gameInfo">
          <h1>VIRUS</h1>
          <h3>
            Your score is <span>{this.state.score}</span>
          </h3>
          <h4>
            Available rounds: <span>{this.state.rounds}</span>
          </h4>
        </div>
        <div className="circles">
          {Array.from(Array(this.state.difficulty)).map((_, index) => (
            <Circle
              click={() => this.clickHandler(index)}
              key={index}
              id={index + 1}
              active={this.state.current === index}
              gameOnStatus={this.state.gameOn}
            />
          ))}
        </div>
        {this.state.gameOver && (
          <GameOver score={this.state.score} close={this.closeHandler} />
        )}
        <div className="buttons">
          {!this.state.gameOn ? (
            <Button
              id="gameStart"
              start={this.startHandler}
              children={"Start"}
            />
          ) : (
            <Button id="gameStop" stop={this.stopHandler} children={"Stop"} />
          )}
        </div>
      </main>
    );
  }
}

export default App;
