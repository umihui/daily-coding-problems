/* Hungry Rabbit
A very hungry rabbit is placed in the center of of a garden, represented by a rectangular N x M 2D matrix.

The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. If the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count.

On a given turn, the rabbit will eat the carrots available on the square that it is on, and then move up, down, left, or right, choosing the the square that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots.

Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers. For example,

[[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]]
Should return

27 */

function findCenterOptions(width, length) {
  var x, y;
  if (width % 2 !== 0 && length % 2 !== 0) {
    x = Math.floor(width / 2);
    y = Math.floor(length / 2);
    return [[x, y]];
  } else if (width % 2 !== 0) {
    x = Math.floor(width / 2);
    y = length / 2;
    return [[x, y - 1], [x, y]];
  } else if (length % 2 !== 0) {
    x = width / 2;
    y = Math.floor(length / 2);
    return [[x - 1, y], [x, y]];
  } else {
    x = width / 2;
    y = length / 2;
    return [[x - 1, y - 1],[x, y - 1], [x, y], [x - 1, y]] // clockwise
  }
}

function compareSquares([...arrs], matrix) { 
  return arrs.reduce((result, arr) => {  
    return matrix[result[0]][result[1]] > matrix[arr[0]][arr[1]] ? result : arr;
  })
}

function findValidNextOption([x, y], matrix) {
  var options = [[x - 1, y], [x, y + 1], [x + 1, y], [x, y - 1]];
  var candidates = []
  options.forEach(el => {
    if (matrix[el[0]] && matrix[el[0]][el[1]]) {
      candidates.push(el)
    }
  })
  return candidates;
}

function numOfTotalCarrots(matrix) {
  var totalCarrots = 0;
  var start;
  var centerOptions = findCenterOptions(matrix.length, matrix[0].length);
  if (centerOptions.length === 1) {
    start = centerOptions[0];
  } else {
    start = compareSquares(centerOptions, matrix)
  }
  totalCarrots += matrix[start[0]][start[1]];
  matrix[start[0]][start[1]] = 0;
  let next = findValidNextOption(start, matrix);
  var nextMove;
  while (next.length !== 0) {
    nextMove = compareSquares(next, matrix)
    totalCarrots += matrix[nextMove[0]][nextMove[1]];
    matrix[nextMove[0]][nextMove[1]] = 0;
    next = findValidNextOption(nextMove, matrix);
  }
  return totalCarrots;
}

var matrix = [[5, 7, 8, 6, 3],
 [0, 0, 7, 0, 4],
 [4, 6, 3, 4, 9],
 [3, 1, 0, 5, 8]];

console.log(numOfTotalCarrots(matrix))