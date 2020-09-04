import React, { Component } from "react";
import Board from "./BoardComponent";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(null),
      digits: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      isActive: null,
    };
  }

  handleCellClick = (i) => {
    let newSquares = [...this.state.squares];
    newSquares[i] = this.state.isActive;
    this.setState({ squares: newSquares });
  };

  handleNumClick = (i) => {
    this.setState({ isActive: i });
  };

  solve = () => {
    console.log("Solve it is called");
  };

  reset = () => {
    let newSquares = Array(81).fill(null);
    this.setState({ squares: newSquares });
  };

  render() {
    let digits = this.state.digits.map((n) => {
      if (n === this.state.isActive) {
        return (
          <button
            key={n}
            className="badge badge-primary m-1 digit"
            onClick={() => this.handleNumClick(n)}
          >
            {n}
          </button>
        );
      } else {
        return (
          <button
            key={n}
            className="badge badge-warning m-1 digit"
            onClick={() => this.handleNumClick(n)}
          >
            {n}
          </button>
        );
      }
    });

    return (
      <div className="game">
        <div className="game-board pl-2">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleCellClick(i)}
          />
        </div>
        <div className="game-digits mt-2 ml-0 pl-0">{digits}</div>
        <div>
          <center>
            <button
              className="solveitBtn btn btn-md btn-success m-2"
              onClick={this.solve}
            >
              Solve it!
            </button>
            <button
              className="solveitBtn btn btn-md btn-info m-2"
              onClick={this.reset}
            >
              Reset
            </button>
          </center>
        </div>
      </div>
    );
  }
}

export default Game;
