function battle(myArmy, opposingArmy) {
  const size = myArmy.length;
  if (size > opposingArmy.length) {
    return "Opponent retreated";
  } else if (size < opposingArmy.length) {
    return "We retreated";
  }
  const map = new Map([
    ["a", 1], ["b", 2], ["c", 3], ["d", 4], ["e", 5], ["f", 6], ["g", 7], ["h", 8], ["i", 9], ["j", 10], ["k", 11], ["l", 12], ["m", 13], ["n", 14], ["o", 15], ["p", 16], ["q", 17], ["r", 18], ["s", 19], ["t", 20], ["u", 21], ["v", 22], ["w", 23], ["x", 24], ["y", 25], ["z", 26],
    ["A", 27], ["B", 28], ["C", 29], ["D", 30], ["E", 31], ["F", 32], ["G", 33], ["H", 34], ["I", 35], ["J", 36], ["K", 37], ["L", 38], ["M", 39], ["N", 40], ["O", 41], ["P", 42], ["Q", 43], ["R", 44], ["S", 45], ["T", 46], ["U", 47], ["V", 48], ["W", 49], ["X", 50], ["Y", 51], ["Z", 52]
  ]);
  let wins = 0;
  let loses = 0;
  for (let i = 0; i < size; i++) {
    const myChar = myArmy[i];
    const thier = opposingArmy[i];
    const myPower = Number.isFinite(parseFloat(myChar))
      ? parseFloat(myChar)
      : map.get(myChar)
        ? map.get(myChar)
        : 0;
    const thierPower = Number.isFinite(parseFloat(thier))
      ? parseFloat(thier)
      : map.get(thier)
        ? map.get(thier)
        : 0;
    if (myPower > thierPower) {
      wins++;
    } else if (myPower < thierPower) {
      loses++;
    }
  }
  const result =
    wins > loses ? "We won" : wins < loses ? "We lost" : "It was a tie";
  return result;
}
if()