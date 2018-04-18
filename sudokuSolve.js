function sudokuSolve(board, rowIndex, colIndex) {
  //console.log("Called ", rowIndex, colIndex)
  var rowIndex = rowIndex || 0;
  var colIndex = colIndex || 0;
  // your code goes here
  // if is number there or '.'
  // board 9*9
  // determine last move
  //console.log('start', rowIndex, colIndex)
  if (rowIndex === 8 && colIndex === 8) {
    console.log("Checking end ", rowIndex, colIndex, board)
    if (board[rowIndex][colIndex] !== '.') {
      return true;
    } else {
      for (var i = 1; i < 10; i++) {
        var num = '' + i;
        if (checkRow(board,rowIndex,num) && checkCol(board, colIndex, num) 
            && checkMatrix(board,rowIndex,colIndex,num)){
          return true;
        }
      }
      return false;
    }
    
  }
  var nextRow = rowIndex;
  var nextCol = colIndex;
  if(rowIndex + 1 < 9){
    nextRow = rowIndex + 1;
  } else {
    nextRow = 0;
    nextCol = colIndex + 1;
  }
  
  
  if (board[rowIndex][colIndex] === '.' ) {
    for (var i = 1; i < 10;i++) {
      var num = '' + i;
      //console.log('startloop', num, rowIndex, colIndex)

      if (checkRow(board,rowIndex,num) 
          && checkCol(board, colIndex, num) 
          && checkMatrix(board,rowIndex,colIndex,num)){
        //console.log('true', '1' === 1)
        board[rowIndex][colIndex] = '' + i;
//        console.log(board)
        var Solved = sudokuSolve(board, nextRow, nextCol);
        if (!Solved) {
           board[rowIndex][colIndex] = '.'
        } else {
          return true;
        }
         
      }        
    }
    
    return false;
  } else { 
    //console.log('next')
    return sudokuSolve(board, nextRow, nextCol);
  }
}



function checkRow(board, rowIndex, number) {
//  console.log('row', typeof number)
  var row = board[rowIndex];
  return !row.includes(number);
}

function checkCol(board, colIndex, number) {
//  console.log('col', typeof number)
  for (var i = 0; i < 9 ; i++) {
    if(board[i][colIndex] === number) {
      return false
    }
  } 
  return true;
}

/*
square : [[1,2,3],[1,2,3],[1,2,3]]
*/
function checkMatrix(board, rowIndex, colIndex, number) {
//  console.log('matrix', typeof number)
  var minY = Math.floor(rowIndex / 3);
  var minX = Math.floor(colIndex / 3);  
  for (var i = minY; i < minY+3 ; i++) {
    for(var j = minX; j < minX+3; j++) {
      if (board[i][j] === number) {
        return false;
      }
    }
  }
  return true;
}


board = [[".",".",".","7",".",".","3",".","1"],
         ["3",".",".","9",".",".",".",".","."],
         [".","4",".","3","1",".","2",".","."],
         [".","6",".","4",".",".","5",".","."],
         [".",".",".",".",".",".",".",".","."],
         [".",".","1",".",".","8",".","4","."],
         [".",".","6",".","2","1",".","5","."],
         [".",".",".",".",".","9",".",".","8"],
         ["8",".","5",".",".","4",".",".","."]]

sudokuSolve(board);
