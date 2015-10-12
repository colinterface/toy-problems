// balanced parentheses problem:
//
// We have a set of strings using the following symbols ( ) { } [ ] -
// write a function that returns true if a string is balanced
// (meaning each opening symbol has a corresponding closing symbol
// and the pairs of parentheses are properly nested), and false if the string is not balanced.

// examples of balanced strings:
// ([])
// ()({})[()]
// {{()}[]}
//
// examples of unbalanced strings:
// (((
// ([)]
// ()()()(


// [([])]

function bracketsAreBalanced(string) {

  var openBrackets = {
    '(': 'round',
    '{': 'curly',
    '[': 'square',
    '<': 'angle'
  };

  var closeBrackets = {
    ')': 'round',
    '}': 'curly',
    ']': 'square',
    '>': 'angle'
  };

  // make stack
  var bracketStack = [];
  // for each char in input string
  string.split('').forEach(function(bracket) {
    // if char is open bracket
    if (openBrackets[bracket]) {
      // add bracket type to stack
      bracketStack.push(openBrackets[bracket]);
    }
    // if char is close bracket
    if (closeBrackets[bracket]) {
      // if type is not the same as type on top of stack
      if (closeBrackets[bracket] !== bracketStack[bracketStack.length - 1]) {
        return false;
      } else {
        bracketStack.pop();
      }
    }
  });

  // if stack still has items
  if (bracketStack.length) {
    return false;
  } else {
    return true;
  }
}

console.log(bracketsAreBalanced('({<{[{()}][]}>})<>')); // true
console.log(bracketsAreBalanced('([)]')); // false
