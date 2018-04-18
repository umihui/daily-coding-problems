function validateSudoku(board) {
  // iterate rows
  for (let row of board) {
    if (!findConflict(row)) {
      return false;
    }
  }
  // iterate cols
  for (let i = 0; i < 9; i++) {
    var col = [];
    for (let j = 0; j < 9; j++) {
      col.push(board[i][j]);
    }
    if (!findConflict(col)) {
      return false;
    }
  }
  // iterate matrixs
  var options = [0, 3, 6];
  for (let x of options) {
    for (let y of options) {
      var matrix = [];
      for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
          matrix.push(board[i][j])
        }
      }
      if (!findConflict(matrix)) {
        return false;
      }
    }
  }
  return true;
}



function findConflict(arr) {
  var cache = {};
  var result = true
  arr.forEach(num => {
    if (cache[num] || num > 9 || num < 0) {
      result = false;
    } else {
      cache[num] = true;
    }
  })
  return result;
}

var test = [
  [5, 4, 3, 1, 9, 8, 7, 6, 2], 
  [9, 1, 6, 7, 5, 2, 8, 4, 3], 
  [8, 7, 2, 6, 4, 3, 9, 1, 5], 
  [7, 9, 8, 5, 6, 4, 3, 2, 1], 
  [6, 5, 1, 3, 2, 9, 4, 8, 7], 
  [3, 2, 4, 8, 7, 1, 6, 5, 9], 
  [4, 8, 9, 2, 3, 5, 1, 7, 6], 
  [2, 3, 7, 4, 1, 6, 5, 9, 8], 
  [1, 6, 5, 9, 8, 7, 2, 3, 4]
];

console.log(validateSudoku(test));