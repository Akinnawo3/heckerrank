
// https://www.hackerrank.com/challenges/extra-long-factorials/problem?isFullScreen=true

function birthday(s, d, m) {
    // Write your code here
    let counter = 0;
    for (let i = 0; i < s.length ; i++) {
        let sum = 0;
        for (let j = 0; j < m; j++) {
            sum += s[i + j]
        }
        if (sum === d) {
            counter++
        }
    }

    return counter

}