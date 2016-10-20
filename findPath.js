// given a matrix of symbols and starting/ending positions
// find the shortest path to the goal.
// no going through walls or backtracking.
// then see how many indirect paths you can generate.

const illegalValues = {
  '*': true, // boundary
  'x': true, // backtracking
};

const directions = {
  L: (xy) => [xy[0] - 1, xy[1]],
  R: (xy) => [xy[0] + 1, xy[1]],
  U: (xy) => [xy[0], xy[1] - 1],
  D: (xy) => [xy[0], xy[1] + 1]
}

const board = [
  ['*', '*', '*', '*', '*', '*', '*'],
  ['*', 'S', ' ', ' ', ' ', ' ', '*'],
  ['*', '*', '*', ' ', '*', ' ', '*'],
  ['*', ' ', ' ', ' ', '*', '*', '*'],
  ['*', ' ', '*', '*', '*', ' ', '*'],
  ['*', ' ', ' ', ' ', ' ', 'F', '*'],
  ['*', '*', '*', '*', '*', '*', '*']
];

const startPosition = [1, 1];
const endPosition = [board[0].length - 2, board.length - 2];

labyrinth(board);

function labyrinth(board) {

  function getValue(position) {
    return board[position[1]][position[0]];
  }

  function setValue(position, value) {
    board[position[1]][position[0]] = value;
  }

  function isEndPosition(position) {
    return position[0] === endPosition[0] && position[1] === endPosition[1];
  }

  function isLegalPosition(position) {
    if (illegalValues[getValue(position)]) {
      return false;
    }
    return true;
  }

  const solutions = [];

  function findSolutions(steps, position) {
    if (isEndPosition(position)) {
      solutions.push(steps);
      return;
    } else {
      setValue(position, 'x');
      // TODO: iterate through all permutations of direction order
      // this will create more solutions
      Object.keys(directions).forEach((direction) => {
        var newPosition = directions[direction](position);
        if (isLegalPosition(newPosition)) {
          const newSteps = steps.concat(direction);
          findSolutions(newSteps, newPosition);
        }
      });
    }
  }

  findSolutions([], [1, 1]);
  solutions.sort((a, b) => a.length - b.length);
  console.log(solutions);
  return solutions[0];
}
