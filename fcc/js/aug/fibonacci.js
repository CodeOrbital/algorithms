function fibonacciSequence(startSequence, length) {
  if (length < 1) {
    return [];
  }

  let answer = [];

  if (length < 3) {
    for (let c = 0; c < length; c++) {
      answer.push(startSequence[c]);
    }
    return answer;
  }
  let before = startSequence[0];
  let current = startSequence[0];
  let next = startSequence[1];

  answer.push(before);
  answer.push(next);

  for (let i = 0; i < length - 2; i++) {
    before = current;
    current = next;
    next = before + next;
    answer.push(next);
  }
  length = answer;
  return length;
}
window.alert(fibonacciSequence([123456789, 987654321], 5));
