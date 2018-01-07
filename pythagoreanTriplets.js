// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which
// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc

function findTriplet(targetSum) {
  const triplet = [2, 2, 2];

  for (triplet[0]; triplet[0] < targetSum; triplet[0]++) {
    for (triplet[1] = triplet[0] + 1; triplet[1] < targetSum; triplet[1]++) {
      triplet[2] = Math.sqrt(Math.pow(triplet[0], 2) + Math.pow(triplet[1], 2));
      // console.log(triplet);
      if (testTriplet(triplet, targetSum)) {
        return triplet;
      }
    }
  }
}

function testTriplet(triplet, targetSum) {

  if (!isInteger.apply(null, triplet)) {
    return false;
  }

  if (!add.apply(null, triplet) === targetSum) {
    return false;
  }


  // if (!isPythagorean(triplet)) {
  //   return false;
  // }
  //
  // if (!isAscending(triplet)) {
  //   return false;
  // }



  return true;

}

function multiply(...args) {
  if (args.length < 1) {
    return 0;
  }

  return args.reduce(function(product, item) {
    return product * item;
  });
}

function add(...args) {
  console.log(args);
  return args.reduce(function(sum, item) {
    return sum + item;
  });
}

// function isAscending(array) {
//   var previousValue = array[0];
//   for (var i = 1; i < array.length; i++) {
//     if (array[i] <= previousValue) {
//       return false;
//     }
//     previousValue = array[i];
//   }
//   return true;
// }

// function isPythagorean(triplet) {
//   const result = Math.pow(triplet[0], 2) + Math.pow(triplet[1], 2) === Math.pow(triplet[2], 2);
//   console.log(`${triplet} ${result}`);
// }

function isInteger(...args) {
  for (var i = 0; i < args.length; i++) {
    if (args[i] % 1 !== 0) {
      return false;
    }
  }
  return true;
}

const triplet = findTriplet(1000);
console.log(triplet);
// console.log(multiply.apply(null, triplet));
