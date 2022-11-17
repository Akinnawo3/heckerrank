// https://www.hackerrank.com/challenges/migratory-birds/problem?isFullScreen=true
function migratoryBirds(arr) {
    // Write your code here
    let res = {}
    const sorted = arr.sort((a, b) => b - a)
    for (let i = 0; i < sorted.length; i++) {
        const isPresent = (sorted[i].toString() in res)
        if (isPresent) {
            res[sorted[i].toString()] = res[sorted[i].toString()] + 1
        } else {
            res[sorted[i].toString()] = 1
        }
    }
    const max = res[(Object.keys(res).reduce((a, b) => res[a] > res[b] ? a : b))]
    const posValues = Object.keys(res).find(key => res[key] === max);

    console.log(posValues)
    return posValues
}