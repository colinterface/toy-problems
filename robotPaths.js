// Imagine a robot sitting on the upper left corner of an X by Y grid.// The robot can only move in two directions: right and down.// How many possible paths are there for the robot to go from (0,0) to (X,Y)?// FOLLOW UP// Imagine certain spots are "off limits," such that the robot cannot step on them.// Design an algorithm to find a path for the robot from the top left to the bottom right.// TODO: finish solutionfunction createMatrix(m, n) {  var matrix = [];  for (var i = 0; i < m; i++) {    var row = [];    for (var j = 0; j < n; j++) {      row.push(true);    }    matrix.push(row);  }  return matrix;}// var matrix = createMatrix(5, 4);// console.log(matrix);function countRobotPaths(x, y) {  var count = 0;  function generateRobotPaths(maxX, maxY, currentX, currentY) {    if (currentX === maxX && currentY === maxY) {      return ++count;    }  }  // generateRobotPaths(x, y)  return count;}