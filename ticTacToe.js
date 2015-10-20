// write a function that checks a Tic Tac Toe matrix for a win
// return winner's symbol or a message explaining that there is no winner
// extra credit: make your function work for an NxN board

function checkWin(matrix) {

  var row, column, winner;

  function isWin(array) {
    for (var i = 0; i < array.length - 1; i++) {
      if (!array[i] || array[i] !== array[i + 1]) {
        return false;
      }
    }
    winner = array[0];
    return true;
  }

  // check rows
  for (row = 0; row < matrix.length; row++) {
    if (isWin(matrix[row])) {
      return winner;
    }
  }

  // check columns
  for (column = 0; column < matrix[0].length; column++) {
    var currentColumn = [];
    for (row = 0; row < matrix.length; row++) {
      currentColumn.push(matrix[row][column]);
    }
    if (isWin(currentColumn)) {
      return winner;
    }
  }

  // check diagonals
  var majorDiagonal = [];
  var minorDiagonal = [];
  for (var i = 0; i < matrix.length; i++) {
    majorDiagonal.push(matrix[i][i]);
    minorDiagonal.push(matrix[matrix.length - i - 1][i]);
  }

  if (isWin(majorDiagonal)) {
    return winner;
  }

  if (isWin(minorDiagonal)) {
    return winner;
  }

  // no win detected
  return 'everyone loses';

}

var game = [
  ['x', 'o', 'o', 'o'],
  ['x', 'o', 'o', 'o'],
  ['o', 'o', 'x', 'x'],
  ['o', 'x', 'x', 'x'],
]; // should return 'o' because 'o' wins in minor diagonal

console.log(checkWin(game));
