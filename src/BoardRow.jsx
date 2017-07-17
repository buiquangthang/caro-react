import React, {Component} from 'react';

class BoardRow extends Component {
  render() {
    var squares_draw = []
    for(let i=0; i<10; i++) {
      squares_draw.push(this.props.renderSquare(this.props.row, i));
    }
    return (
      <div className="board-row">
        {squares_draw}
      </div>
    );
  }
}

export default BoardRow;
