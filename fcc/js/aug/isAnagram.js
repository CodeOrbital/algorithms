function areAnagrams(str1, str2) {
  let cs1 = str1.toLowerCase();
  let cs2 = str2.toLowerCase();

  let a1 = Array.from(cs1);
  let a2 = Array.from(cs2);
  let fa1 = a1.filter((c) => !/\s+/.test(c));
  let fa2 = a2.filter((c) => !/\s+/.test(c));
  fa1.sort();
  fa2.sort();

  let fs1 = fa1.join("");
  let fs2 = fa2.join("");

  let sl1 = fs1.length;
  let sl2 = fs2.length;
  if (sl1 != sl2) {
    str1 = false;
    return str1;
  }
  for (let i = 0; i < sl1; i++) {
    if (fs1[i] != fs2[i]) {
      str1 = false;
      return str1;
    }
  }
  str1 = true;
  return str1;
}
