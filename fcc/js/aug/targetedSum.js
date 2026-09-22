function findTarget(arr, target) {
  let len = arr.length;
  for (let c = 0; c < len; c++) {
    for (let i = 0; i < len; i++) {
      if (c != i) {
        if (arr[c] + arr[i] === target) {
          const ans = [c, i];
          return ans.sort((a, b) => a - b);
        }
      }
    }
  }
  arr = "Target not found";
  return arr;
}
