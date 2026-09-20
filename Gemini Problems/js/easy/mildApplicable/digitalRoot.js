function root(num) {
  if (num < 0) {
    num *= -1;
  }
  let s = String(num);
  if (num / 10 < 1 && num > 0) {
    return num;
  }
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let n = Number(s[i]);
    sum += n;
  }
  if (sum / 10 >= 1) {
    sum = root(sum);
  }
  return sum;
}
