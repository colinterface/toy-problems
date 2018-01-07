// use the Sieve of Eratosthenes algorithm to find all primes under n
function eratosthenes(n) {

  // set an upper limit of the square root of n
  const upperLimit = Math.sqrt(n);

  // create an array for storing the primeness of each index
  const primenessByIndex = [];

  // fill the array with all true values initially
  for (var i = 0; i < n; i++) {
    primenessByIndex.push(true);
  }

  // for each item in the array
  primenessByIndex.forEach(function(isPrime, index) {
    // if the value is true (ignoring index 0 and 1)
    if (isPrime && index > 1) {
      // starting at the square of the current index
      // jump through the rest of the array at multiples of the current index
      for (var multiple = index * index; multiple < n; multiple += index) {
        // set primeness to false
        primenessByIndex[multiple] = false;
      }
    }
  });

  // return a new array by reducing the array containing primeness by index
  return primenessByIndex.reduce(function(result, isPrime, index) {
    // if the value is true (ignoring index 0 and 1)
    if (isPrime && index > 1) {
      // append the index to the resulting array
      return result.concat(index);
    } else {
      // otherwise return the resulting array without appending
      return result;
    }
  }, []);

};

const primes = eratosthenes(150000);
console.log(primes[10000]);
