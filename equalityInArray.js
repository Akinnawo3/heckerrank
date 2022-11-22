//www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true&fbclid=IwAR3eA_tVUXdhVkDYG1WCx_23rGzvXsI4s9V_DfSLk23hSN7KC57IwD6qtNU
// function equalizeArray(arr) {
//     // Write your code here
//     let arrHolder = []
//     let max = 0;
//     let counter = 0;
//     let sortedArr = arr.sort((a, b) => a - b)
//     sortedArr.forEach((item) => {
//         // console.log(item)
//         if (arrHolder[arrHolder.length - 1] === item) {
//             counter++;
//         } else {
//             if (counter > max) {
//                 max = counter
//             }
//             counter = 1
//             max = 1
//             arrHolder = [item]
//             // arrHolder.push(item)
//         }
//     })
//     return arr.length - Math.max(max, counter)
// }

https: function equalizeArray(arr) {
  //     // Write your code here
  let sortedArr = arr.sort((a, b) => a - b);
  let modeLength = 0;
  let curr = sortedArr[0];
  let currLength = 0;
  sortedArr.forEach((item) => {
    if (item === curr) {
      currLength++;
    } else {
      modeLength = Math.max(currLength, modeLength);
      curr = item;
      currLength = 1;
    }
  });
  // return arr.length - modeLength
  return arr.length - Math.max(modeLength, currLength);
}
