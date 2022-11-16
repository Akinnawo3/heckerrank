
// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true&fbclid=IwAR3zbhw6SG4Ff00pTikhd-jK1E9lEiDHUoE0cC2KZtJRa92ha9Xa5wHmR2s

function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if ((x1 > x2 && v1 > v2) || (x1 < x2 && v1 < v2)) {
    return "NO";
  } else if (x1 > x2 && v1 < v2) {
    let sz1 = x1;
    let sz2 = x2;
    while ((sz1) => sz2) {
      if (sz1 === sz2) {
        return "YES";
      }
      sz1 += v1;
      sz2 += v2;
    }
  } else if (x1 < x2 && v1 > v2) {
    let sz1 = x1;
    let sz2 = x2;
    while (sz1 <= sz2) {
      console.log(sz1, sz2);
      if (sz1 === sz2) {
        return "YES";
      }
      sz1 += v1;
      sz2 += v2;
    }
  }
  return "NO";
}
