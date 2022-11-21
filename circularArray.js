// https://www.hackerrank.com/challenges/circular-array-rotation/problem?fbclid=IwAR1QHbjMEYIGSueKIca2Dz6NPIXLYibulxrmo2qVpQquwFWbm31fKsIRHlo


function circularArrayRotation(a, k, queries) {
    // Write your code here
    let copiedArr = a;
    for (let i = 0; i < k; i++) {
        copiedArr.unshift(copiedArr.pop())
    }
    let result = [];
    for (let i = 0; i < queries.length; i++) {
        result.push(copiedArr[queries[i]])
    }
    return result;
}
