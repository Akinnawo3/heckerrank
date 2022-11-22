// hackerrank.com/challenges/cut-the-sticks/problem?isFullScreen=true
function cutTheSticks(arr) {
    let counts = []
    // Write your code here
    let sortedArr = arr.sort((a, b) => a - b)
    do {
        counts.push(sortedArr.length)
        sortedArr = sortedArr.filter(item => item !== sortedArr[0]).map(item => item - sortedArr[0])
    }
    while (sortedArr[0] !== sortedArr[sortedArr.length - 1])

    return sortedArr.length > 0 ? [...counts, sortedArr.length] : [...counts]
}