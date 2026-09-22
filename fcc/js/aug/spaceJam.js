function spaceJam(s) {
  s = s.toUpperCase();
  let l = s.length;
  let sArray = [];
  let c = 0;
  for (let d = 0; d < l; d++) {
    if (!/\s/.test(s[d])) {
      sArray[c] = s[d];
      c++;
    }
  }
  let jamArray = [];
  let chunk;
  for (let n = 0; n < sArray.length; n++) {
    if (n + 1 != sArray.length) {
      chunk = sArray[n] + "  ";
    } else {
      chunk = sArray[n];
    }
    jamArray[n] = chunk;
  }
  let jam = "";
  for (let i = 0; i < jamArray.length; i++) {
    jam += jamArray[i];
  }
  return jam;
}
/* Shorter using built-in methods
function spaceJam(s) {
  s = s.toUpperCase();
  let sArray = Array.from(s);
  sArray = sArray.filter((char) => !/\s/.test(char));
  let jam = sArray.join("  ");
  return jam;
}
*/
