function isBalanced(s) {
  s = s.toLowerCase();
  let l = s.length;
  let h;
  let f;
  let la;
  if (l == 1) {
    s = "you should enter a text with more than one letter";
  } else if (l % 2 == 0) {
    h = l / 2;
    f = s.slice(0, h);
    la = s.slice(h);
  } else {
    h = (l - 1) / 2;
    f = s.slice(0, h);
    la = s.slice(h + 1);
  }
  let fc = 0;
  let lc = 0;
  let vowel = ["a", "e", "i", "o", "u"];
  for (let c = 0; c < h; c++) {
    if (vowel.includes(f[c])) {
      fc++;
    }
  }
  for (let c = 0; c < h; c++) {
    if (vowel.includes(la[c])) {
      lc++;
    }
  }
  if (fc == lc) {
    s = true;
  } else {
    s = false;
  }
  return s;
}
