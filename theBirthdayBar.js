
// https://www.hackerrank.com/challenges/the-birthday-bar/problem?isFullScreen=true&fbclid=IwAR2i_hPN5rCep7dKkczfMQHjNHnlzdNVLmH9yRMSqvdKHoHlUNJsakwIdYI


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
