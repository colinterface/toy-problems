
// given a function that returns a random number 1-5
function rand5() {
  return Math.ceil(Math.random() * 5);
}

// write a function for random numbers 1-7 which uses the original function
function rand7() {
  return rand5() + Math.floor(Math.random() * 3);
}

console.log(rand7());
