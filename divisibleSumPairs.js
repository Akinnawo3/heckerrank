
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true&fbclid=IwAR343n4DNnQmM_ARSNUE8Nufac05Azs7_d_ESOARncIO9NYnYoDN4xLcDnc


function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let counter = 0
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            console.log((ar[i] + ar[j]))
            if ((ar[i] + ar[j]) % k === 0) {
                
                counter++
            }
        }
    }
    return counter;
}