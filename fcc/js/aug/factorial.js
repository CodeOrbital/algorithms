function factorial(n) {
  if (n < 0) {
    return "Only whole numbers are allowed.";
  }
  if (n === 0) {
    return 1;
  }
  let f;
  f = n * factorial(n - 1);
  return f;
}
