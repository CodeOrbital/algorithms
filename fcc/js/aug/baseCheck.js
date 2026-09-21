function isValidNumber(n, base) {
  n = String(n);
  if (base < 2 || base > 36 || n.length < 1) {
    return "Input error. Enter correctly the values";
  }
  const nums = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  n = n.toLowerCase();
  let signSet = [];
  for (let i = 0; i < base; i++) {
    signSet.push(nums[i]);
  }
  for (let c = 0; c < n.length; c++) {
    if (!signSet.includes(n[c])) {
      return false;
    }
  }
  n = true;
  return n;
}
