// 1.6
// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees. Can you do this in place?

var swapXY = function(matrix, x, y) {
  var temp = matrix[x][y];
  matrix[x][y] = matrix[y][x];
  matrix[y][x] = temp;
};

var transposeMatrix = function(matrix) {
  matrix.forEach(function(array, y) {
    for (var x = 0; x < y; x++) {
      swapXY(matrix, x, y);
    }
  });
};

var rotateMatrix = function(matrix) {
  transposeMatrix(matrix);
  matrix.forEach(function(array) {
    array.reverse();
  });
};

var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotateMatrix(matrix);
console.log(matrix); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]
