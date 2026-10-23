function decode(s) {
  const op = "\\(?";
  const txtE = "([^\\(\\)]*)?";
  const p1 = "(\\([^\\(\\)]*\\))?";
  const p2 = "(\\([^\\(\\)]*\\(?[^\\(\\)]*\\)?[^\\(\\)]*\\))?";
  const p3 =
    "(\\([^\\(\\)]*\\(?[^\\(\\)]*\\(?[^\\(\\)]*\\)?[^\\(\\)]*\\)?[^\\(\\)]*\\))?";
  const cp = "\\)?";
  const exp = op + txtE + p1 + txtE + p2 + p3 + txtE + p1 + txtE + p2 + txtE + p3 + txtE + cp;
  const basePatt = new RegExp(exp, "i");
  //console.log(basePatt);
  let groupsArray = [];
  const matched = s.match(basePatt);
  const matches = matched ? matched : [];
  let arr = [];
  for (let i = 0; i < matches.length; i++) {
    const item = matches[i];
    if (item && i !== 0) {
      arr.push(item);
    } else if (!item) {
      //decode(item) && arr.push(decode(item))
    }
  }
  const l = arr.length;
  arr.forEach((item) => {
    const tArray = [];
    if (!item.includes("(") && l === 1) {
      const strArr = item.split("");
      for (let i = strArr.length - 1; i >= 0; i--) {
        tArray.push(strArr[i]);
      }
      const reversed = tArray.join("");
      groupsArray.push(reversed);
    } else if (!item.includes("(") && l !== 1) {
      groupsArray.push(item);
    } else if (item.includes("(")) {
      groupsArray.push(decode(item));
    }
  });
  const pre = l !== 1 ? groupsArray.join("").split("") : groupsArray;
  let ordered = [];
  if (s[0] === "(") {
    for (let i = pre.length - 1; i >= 0; i--) {
      ordered.push(pre[i]);
    }
  } else {
    ordered = pre;
  }
  const ans = ordered.join("");
  console.log(
    `s = ${s} \n matches = ${matches} \n arr = ${arr} \n pre = ${pre}`,
  );
  return ans ? ans : "Invalid input";
}

console.log(`1.✅✅✅ Answer is ${decode("(cba)")}`);
console.log(`2.✅✅✅ Answer is ${decode("(d(bc)a)")}`);
console.log(`3.✅✅✅ Answer is ${decode("((e)(b(c)d)a)")}`);
console.log(`4.✅✅✅ Answer is ${decode("(f(b(dc)e)a)")}`);
console.log(`5.✅✅✅ Answer is ${decode("f(Ce(re))o((e(aC)m)d)p")}`);
console.log(`6.✅✅✅ Answer is ${decode("((is?)(a(t d)h)e(n y( uo)r)aC)")}`);

/* 
  p3
  ¯¯
(txt (txt(txt(txt)txt)txt) txt)

__________________________________

  #6 pattern
   ¯¯¯¯¯¯¯¯¯
p1 p2 txtE p2 txtE
*/
