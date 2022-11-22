// https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=true&fbclid=IwAR3HicbjyfHq5MDExqyugx4WTUnlDqPg4rNu_g5TUQU8i0VGMzLeklFABbQ


function viralAdvertising(n) {
    // Write your code here
    let likes = 2
    let shared = 5

    for (let i = 1; i <= n; i++) {
        if (i > 1) {
            shared = Math.floor(shared / 2) * 3
            likes += Math.floor(shared / 2) 
        }
    }
    return likes
}