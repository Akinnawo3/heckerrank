// https://www.hackerrank.com/challenges/between-two-sets/problem?fbclid=IwAR2VsdAOrZWXUM0ypqeLDAy4sG7PWIy3CeErhAREgdOX916gP6cKayT29tY

function getTotalX(a, b) {
  // Write your code here
  const merge = a.concat(b).sort((a, b) => a - b);
  let count = 0;
  for (let i = merge[0]; i <= merge.at(-1); i++) {
    if (b.every((item) => item % i === 0) && a.every((item) => i % item === 0)) {
      count++;
    }
  }

  return count;
}
