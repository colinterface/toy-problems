// Given a file which contains text, return a string
// that displays the number of lines, words, and characters that file contains.
// The output should look like: "2 lines, 19 words, 98 characters'

var fs = require('fs');

function textCounter(path) {
  var text = fs.readFileSync(path, { encoding: 'utf8' });
  return (
    text.split('\n').length + ' lines, ' +
    text.split(' ').length + ' words, ' +
    text.split('').length + ' characters'
  );
}

console.log(textCounter('./catIpsum.txt'));
