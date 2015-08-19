// if the string input has no repeating characters
  // return true
// else
  // return false


// this solution is linear time because object lookups are constant
// is there a way to do this without additional data structures?
var uniqueCharacters = function(string) {
  var pastCharacters = {};
  for (var i = 0; i < string.length; i++) {
    if (pastCharacters[string[i]]) {
      return false;
    } else {
      pastCharacters[string[i]] = true;
    }
  }
  return true;
};

console.log(uniqueCharacters('abcdef')); // true
console.log(uniqueCharacters('abccdef')); // false
