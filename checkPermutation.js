// 1.3
// Given two strings, write a method to decide if one is a permutation of the other.

var stringToCounts = function(string) {
  var counts = {};
  for (var i = 0; i < string.length; i++) {
    if (!counts[string[i]]) {
      counts[string[i]] = 1;
    } else {
      counts[string[i]] ++;
    }
  }
  return counts;
};

var objectEquality = function(obj1, obj2) {
  // does not handle nested objects yet
  for (var key in obj1) {
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
};

var checkPermutation = function(string1, string2) {
  var counts1 = stringToCounts(string1);
  var counts2 = stringToCounts(string2);
  return objectEquality(counts1, counts2);
};

console.log(checkPermutation('asdf', 'fdas'));
console.log(checkPermutation('what', 'no'));
