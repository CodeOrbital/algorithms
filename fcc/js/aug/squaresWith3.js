function squaresWithThree(n) {
  let count = 0;
  for (let nth = 1; nth <= n; nth++) {
    const str = String(nth * nth);
    let gotten = false;
    for (let i = 0; i < str.length && !gotten; i++) {
      if (str[i] == 3) {
        count++;
        gotten = true;
      }
    }
  }
  return count;
}
