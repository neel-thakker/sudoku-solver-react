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

  solve = () => {
    console.log("Solve it is called");
    let board = Array(9);
    for (let i = 0; i < 9; i++) {
      board[i] = Array(9);
      for (let j = 0; j < 9; j++) {
        board[i][j] = this.state.squares[i * 9 + j]
          ? this.state.squares[i * 9 + j]
          : 0;
      }
    }

    if (this.solveSudoku(board)) {
      console.log("Misson Successful");

      let newSquares = Array(81).fill(0),
        p = 0;

      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          newSquares[p] = board[i][j];
          p++;
        }
      }

      this.setState({ squares: newSquares });
    } else {
      console.log("Invalid Input");

      alert("Invalid input");
    }
  };

  isValidInput = (board) => {
    return null;
  };

  isValidTOPut = (i, j, n, board) => {
    for (let k = 0; k < 9; k++) {
      if (board[i][k] === n || board[k][j] === n) {
        return false;
      }
    }

    let p = Math.floor(i / 3),
      q = Math.floor(j / 3);
    p *= 3;
    q *= 3;

    //console.log("p=" + p + " q=" + q + " n=" + n + " i=" + i + " j=" + j);

    for (let k = p; k < p + 3; k++) {
      for (let l = q; l < q + 3; l++) {
        if (board[k][l] === n) {
          return false;
        }
      }
    }

    return true;
  }; // end-isValidTOPut

  solveSudoku(board) {
    let row = -1,
      col = -1,
      foundNull = false;

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === 0) {
          row = i;
          col = j;
          foundNull = true;
          break;
        }
      }
      if (foundNull) {
        break;
      }
    } // end-for1

    if (row === -1) {
      return true;
    }

    for (let i = 1; i < 10; i++) {
      if (this.isValidTOPut(row, col, i, board)) {
        board[row][col] = i;
        if (this.solveSudoku(board)) {
          return true;
        }
        board[row][col] = 0;
      }
    }

    return false;
  } // end-solveSudoku

  print = (board) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        console.log(board[i][j] + " ");
      }
      console.log("\n");
    }
  };
} // end-class

export default Game;
