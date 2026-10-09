function milePace(miles, duration) {
  const tReg = /(\d{2,}):(\d{2})/;
  const regArray = duration.match(tReg);
  let minutes = Number(regArray[1]);
  let seconds = Number(regArray[2]);
  let totalTime = seconds + minutes * 60;
  let neatTime = Math.round(totalTime / miles);
  let sec = `${neatTime % 60}`;
  let min = `${Math.floor(neatTime / 60)}`;
  let ansSec = sec.length > 1 ? sec : "0" + sec;
  let ansMin = min.length > 1 ? min : "0" + min;
  let ans = ansMin + ":" + ansSec;
  return ans;
}
