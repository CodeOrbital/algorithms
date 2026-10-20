function toCamelCase(s) {
  s = s.trim();
  let arr = s.split(/\s|-|_/);
  const alpha = /[A-Za-z]/;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      let word = arr[0]
        .split("")
        .map((char) => (alpha.test(char) ? char.toLowerCase() : char))
        .join("");
      arr[0] = word;
    } else {
      let word = arr[i]
        .split("")
        .map((char, i) => {
          if (i === 0) return alpha.test(char) ? char.toUpperCase() : char;
          else {
            return alpha.test(char) ? char.toLowerCase() : char;
          }
        })
        .join("");
      arr[i] = word;
    }
  }
  const ans = arr.join("");
  return ans;
}
console.log(toCamelCase("   4y yy Yyr_wywyy-wuwu"));
