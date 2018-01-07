// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function createRange(min, max, step) {
  step = step || 1;
  var result = [];
  for (var i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}

function isEvenlyDivisible(number, divisor) {
  return number % divisor === 0;
}

function smallestMultiple(max) {
  const divisors = createRange(2, max);
  var candidate = max;

  while (true) {
    var isEvenlyDivisibleByAllDivisors = true;

    for (var i = 0; i < divisors.length; i++) {
      if (!isEvenlyDivisible(candidate, divisors[i])) {
        isEvenlyDivisibleByAllDivisors = false;
        break;
      }
    }

    if (isEvenlyDivisibleByAllDivisors) {
      return candidate;
    }
    candidate += max;
  }
}

console.log(smallestMultiple(20));
