// Note: Try to solve this task in-place (with O(1) additional space), since this is what you'll be asked to do during an interview.
//
// You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
//
// Example
//

//    rotateImage(a) =
// [[7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]]

var a = [[1, 2, 3, 4],
       [ 5, 6, 7, 8],
       [9, 10, 11, 12],
     [13,14,15,16]];


var rotateImage = function(matrix) {
  var n = matrix.length - 1;
  var swapHelper = function(i, j) {
    if (i + 1 === n) {
      return;
    } else {
      for(var k = j; k < n-j; k++) {
        var temp = matrix[i][k];
        matrix[i][k] = matrix[n-k][i];
        matrix[n-k][i] = matrix[n-i][n-k];
        matrix[n-i][n-k] = matrix[k][n-i];
        matrix[k][n-i] = temp;
      }
      swapHelper(i + 1, j + 1);
    }
  }
  swapHelper(0,0);
  return matrix;
}

console.log(rotateImage(a));
