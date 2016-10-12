// a narcissistic number is the sum of its own digits
// each raised to the power of the number of digits

// write a function that returns true for a narcissistic input


function isNarcissistic(n) {
  return n === n.toString().split('').reduce((sum, digit, i, digits) => {
    return sum + Math.pow(digit, digits.length);
  }, 0);
}


for (var i = 10; i < 10000000; i++) {
  if (isNarcissistic(i)) {
    console.log(i);
  }
}

// console.log(isNarcissistic(153)); // true
// console.log(isNarcissistic(152)); // false
