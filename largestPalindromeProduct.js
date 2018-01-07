// A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.


// not very clever but it works
// TODO: figure out where to end the for loop more generally
// max - 100 doesn't work for 99999
function largestPalindromeProduct(max) {
  const palindromes = [];
  for (var i = max; i > max - max * 0.1; i--) {
    for (var j = max; j > max - max * 0.1; j--) {
      const product = i * j;
      const reverseProduct = parseInt(product.toString().split('').reverse().join(''));
      if (product === reverseProduct) {
        console.log(`${i} * ${j} = ${product}`);
        palindromes.push(product);
      }
    }
  }
  return Math.max.apply(null, palindromes);
}

console.log(largestPalindromeProduct(999));
