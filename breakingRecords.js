// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen&fbclid=IwAR0xbYcPkdUQQPki-9weJIDL2jG7oQ4f6byKfE5Ta9SWpCuBLXGLHTSHteE

function breakingRecords(scores) {
    let maxCount = 0;
    let minCount = 0;
    let max = scores[0];
    let min = scores[0];
    // Write your code here
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < min) {
            min = scores[i]
            i !== 0 && minCount++
        }
        if (scores[i] > max) {
            max = scores[i]
            i !== 0 && maxCount++
        }
    }
    return [maxCount, minCount]
}