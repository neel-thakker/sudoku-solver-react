import React, { Component } from "react";
import Board from "./BoardComponent";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(81).fill(null),
      digits: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  }

  handleCellClick = (i) => {
    console.log("handleCellClick is working", i);
  };

  handleNumClick = (i) => {
    console.log("handleDigiClick is working", i);
  };

  render() {
    let digits = this.state.digits.map((n) => (
      <button key={n} className="badge badge-warning m-1 digit">
        {n}
      </button>
    ));

    return (
      <div className="game">
        <div className="game-board pl-2">
          <Board
            squares={this.state.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-digits mt-2 ml-0 pl-0">{digits}</div>
      </div>
    );
  }
}

export default Game;
