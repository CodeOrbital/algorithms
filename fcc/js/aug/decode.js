function decode(message, shift) {
  const alpha = [
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
  const charMap = new Map(alpha.map((letter, index) => [index, letter]));
  const capitals = /[A-Z]/;
  const alphabet = /[A-Za-z]/;
  let uppersPlace = [];
  const mArray = message.split("");
  mArray.forEach((char, index) => {
    if (capitals.test(char)) {
      uppersPlace.push(index);
    }
  });
  let dArray = mArray.map((char) => {
    if (alphabet.test(char)) {
      const targetIndex = alpha.indexOf(char.toLowerCase()) - shift;
      return charMap.get(
        targetIndex > 25
          ? targetIndex - 26
          : targetIndex < 0
            ? targetIndex + 26
            : targetIndex,
      );
    } else {
      return char;
    }
  });
  dArray = dArray.map((char, index) => {
    if (alphabet.test(char)) {
      return uppersPlace.includes(index) ? char.toUpperCase() : char;
    } else {
      return char;
    }
  });
  const decoded = dArray.join("");
  return decoded;
}
