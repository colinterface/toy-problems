// 1.4 replace all spaces in a string with %20

var replaceSpaces = function(string) {
  var words = string.split(' ');

  return words.map(function(word, i) {
    if (i < words.length - 1) {
      return word += '%20';
    } else {
      return word;
    }
  }).join('');
};

console.log(replaceSpaces('thats all folks!'));
