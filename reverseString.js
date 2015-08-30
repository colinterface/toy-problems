// reverse a string with recursion
// no inner function allowed

function reverseString(string, i, result) {

  // define the arguments that aren't supplied initially
  i = i || string.length;
  result = result || '';

  // return result only when base case is met
  if (string.length === result.length) {
    return result;
  }

  // decrement iterator
  i--;

  // concatenate current char to result
  result += string[i];

  // return self-invocation
  return reverseString(string, i, result);
}

console.log(reverseString('woo yey'));
