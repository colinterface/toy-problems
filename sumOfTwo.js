function sumOfTwo(a, b, v) {
  b = new Set(b);
  return a.some((item) => b.has(v - item));
}
