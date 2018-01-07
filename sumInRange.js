function sumInRange(nums, queries) {
  return modulo(sum(queries.map((query) => {
    return sum(nums.slice(query[0], query[1] + 1));
  })), Math.pow(10, 9) + 7);
}

function sum(array) {
  return array.reduce((sum, item) => {
    return sum + item;
  });
}

function modulo(left, right) {
  return ((left % right) + right) % right;
}

const result = sumInRange([3, 0, -2, 6, -3, 2], [[0, 2], [2, 5], [0, 5]]);
console.log(result);
