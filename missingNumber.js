// given an array of length n
// where the possible values are 1 through n + 1
// return the missing number
// do it in linear time and constant space
// how would you find k missing numbers instead of just one with the same constraints?

var findMissingNumber = function(array) {
  var completeSum = 0;
  for (var i = 1; i <= array.length + 1; i++) {
    completeSum += i;
  }
  var actualSum = 0;
  array.forEach(function(item) {
    actualSum += item;
  });
  return completeSum - actualSum;
};

console.log(findMissingNumber([4, 2, 1])); // 3
console.log(findMissingNumber([4, 2, 1, 3, 6, 5, 9, 7])); // 8
