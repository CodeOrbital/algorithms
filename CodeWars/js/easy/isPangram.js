/*
function isPangram(string) {
  const reg = /[a-z]/;
  let arr = string.toLowerCase().split("").filter((char) => {
    return reg.test(char);
  });
  const alpha = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const ans = alpha.every((letter) => arr.includes(letter));
  return ans;
}
*/
function isPangram(string) {
  const reg = /[a-z]/;
  let set = new Set(
    string
      .toLowerCase()
      .split("")
      .filter((char) => {
        return reg.test(char);
      }),
  );
  const ans = set.size === 26;
  return ans;
}
