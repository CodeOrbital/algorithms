/*function abbrevName(name) {
  let abbreviation = name[0].toUpperCase() + ".";
  let saveLetter = false;
  for (let l = 1; l < name.length; l++) {
    if (name[l] === " ") {
      saveLetter = true;
      continue;
    }
    if (saveLetter) {
      return abbreviation + name[l].toUpperCase();
    }
  }
}
*/
function abbrevName(name) {
  const arr = name.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}
