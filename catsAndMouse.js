// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem?isFullScreen=true&fbclid=IwAR0wNk5KI2_Yi33vdFzJpuJLJ-KBb7GOj-


function catAndMouse(x, y, z) {
  const distanceCatA = Math.abs(z - x);
  const distanceCatB = Math.abs(z - y);

  return distanceCatA < distanceCatB ? "Cat A" : distanceCatB < distanceCatA ? "Cat B" : "Mouse C";
}
