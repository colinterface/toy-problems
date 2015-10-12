// write a function that checks a Tic Tac Toe matrix for a win
// return true for win, false for no win

var game = [
  ['x', 'o', 'o'],
  ['x', 'o', 'o'],
  ['o', '', 'x']
]; // should return true because 'o' wins in minor diagonal

function checkWin(matrix) {

  function containsWin(array) {
    for (var i = 0; i < array.length - 1; i++) {
      if (array[i] !== array[i + 1]) {
        return false;
      }
    }
    return true;
  }

  var x, y;

  // check rows
  for (y = 0; y < matrix.length; y++) {
    if (containsWin(matrix[y])) {
      return true;
    }
  }

  // check columns
  for (x = 0; x < matrix[0].length; x++) {
    var column = [];
    for (y = 0; y < matrix.length; y++) {
      column.push(matrix[y][x]);
    }
    if (containsWin(column)) {
      return true;
    }
  }

  // check diagonals
  var majorDiagonal = [];
  var minorDiagonal = [];
  for (x = 0; x < matrix.length; x++) {
    majorDiagonal.push(matrix[x][x]);
    minorDiagonal.push(matrix[matrix.length - x - 1][x]);
  }

  if (containsWin(majorDiagonal)) {
    return true;
  }

  if (containsWin(minorDiagonal)) {
    return true;
  }

  // no win detected
  return false;

}

console.log(checkWin(game));
