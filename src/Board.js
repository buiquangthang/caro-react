import React, {Component} from 'react';
import Square from './Square';
import BoardRow from './BoardRow';
import ProcessWinLose from './ProcessWinLose';

class Board extends Component {
  constructor(props) {
    super(props);
    this.processWin = new ProcessWinLose();
    let squares = new Array(10)
    for(let i=0; i<squares.length; i++) {
      squares[i] = new Array(10);
    }
    this.state = {
      squares: squares,
      xIsNext: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
  }

  handleClick(row, col) {
    const squares = this.state.squares
    squares[row][col] = this.state.xIsNext ? 'X' : 'O'
    this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    this.winLose(this.processWin, squares, squares[row][col], row, col);
  }

  winLose(processWin, board, move , x, y) {
    if (processWin.processRow(board, move, x, y)
      || processWin.processColumn(board, move, x, y)
      || processWin.processCrossTopLeftToBottomRight(board, move, x, y)
      || processWin.processCrossTopRightToBottomLeft(board, move, x, y)) {
      console.log(move + ' are WIN');
    }
  }

  renderSquare(row, col) {
    return <Square value={this.state.squares[row][col]} onClick={() => this.handleClick(row, col)} />;
  }

  render() {
    var squares_row = []
    const status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    for(let i=0; i<10; i++) {
      squares_row.push(<BoardRow row={i} renderSquare={this.renderSquare} />)
    }

    return (
      <div>
        <div className="status">{status}</div>
        {squares_row}
      </div>
    );
  }
}

export default Board;
