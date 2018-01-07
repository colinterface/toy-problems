// The sum of the squares of the first ten natural numbers is
// 12 + 22 + ... + 102 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)2 = 552 = 3025

// Hence the difference between the sum of the squares of the first ten natural
// numbers and the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred
// natural numbers and the square of the sum.

function sumOfSquares(range) {
  return range.reduce(function(sum, item) {
    return sum + Math.pow(item, 2);
  }, 0);
}

function squareOfSum(range) {
  return Math.pow(range.reduce(function(sum, item) {
    return sum + item;
  }, 0), 2);
}

function createRange(min, max, step) {
  step = step || 1;
  const result = [];
  for (var i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

const range = createRange(1, 100);
const sumOfSquaresResult = sumOfSquares(range);
const squareOfSumResult = squareOfSum(range);

console.log(`square of sum: ${squareOfSumResult}`);
console.log(`sum of squares: ${sumOfSquaresResult}`);
console.log(`difference: ${squareOfSumResult - sumOfSquaresResult}`);
