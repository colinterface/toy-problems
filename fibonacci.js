function fib(n) {
  if (n === 0) {
    return 0;
  } else if (n < 2) {
    return 1;
  } else {
    return fib(n - 2) + fib(n - 1);
  }
}

for (var i = 0; i < 20; i++) {
  console.log(fib(i));
}
