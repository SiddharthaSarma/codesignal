// https://app.codesignal.com/interview-practice/task/5A8jwLGcEpTPyyjTB/solutions

function rotateImage(a) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
      [a[i][j], a[j][i]] = [a[j][i], a[i][j]];
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < (a.length / 2 | 0); j++) {
      [a[i][j], a[i][a.length - j - 1]] = [a[i][a.length - j - 1], a[i][j]];
    }
  }
  return a;

}
