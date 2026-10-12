function isUnnaturalPrime(n) {
  if (n === 0 || n === 1 || n === -1) {
    return false;
  }
  n = n < 0 ? -1 * n : n;
  let isPrime = true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
