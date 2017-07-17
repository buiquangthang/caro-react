class ProcessWinLose {
  processRow(board, move, row, col) {
    var temp_row = row;
    var temp_col = col;
    // Left to Right
    var count = 0
    while(col < board.length) {
      if (board[row][col++] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    // Right to Left
    count = 0;
    row = temp_row;
    col = temp_col;
    while(col >=0) {
      if (board[row][col--] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    return false;
  }

  processColumn(board, move, row, col) {
    var temp_row = row;
    var temp_col = col;
    // Top down bottom
    var count = 0;
    while(row < board.length) {
      if (board[row++][col] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    // Bottom up Top
    count = 0;
    row = temp_row;
    col = temp_col;
    while(row >=0) {
      if (board[row--][col] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    return false;
  }

  processCrossTopLeftToBottomRight(board, move, row, col) {
    var temp_row = row;
    var temp_col = col;
    // Top down bottom
    var count = 0;
    var n = board.length;
    while(row < n && col < n) {
      if(board[row++][col++] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    // Bottom up Top
    count = 0;
    row = temp_row;
    col = temp_col;
    while(row >= 0 && col >= 0) {
      if(board[row--][col--] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    return false;
  }

  processCrossTopRightToBottomLeft(board, move, row, col) {
    var temp_row = row;
    var temp_col = col;
    // Top down bottom
    var count = 0;
    var n = board.length;
    while(row < n && col >= 0) {
      if(board[row++][col--] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    // Bottom up Top
    count = 0;
    row = temp_row;
    col = temp_col;
    while(row >= 0 && col < n) {
      if(board[row--][col++] === move) {
        count++;
        if (count === 5) return true;
      }
    }
    return false;
  }
}

export default ProcessWinLose;
