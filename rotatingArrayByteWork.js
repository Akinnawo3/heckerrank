function rotatingArray(a,k) {
 
    let copiedArr = [...a];
    for (let i = 0; i < k; i++) {
        const firstItem= copiedArr[0]
        copiedArr.shift()
        copiedArr.push(firstItem)
    }
    return copiedArr
}


// sample test case
console.log(rotatingArray([1,2,3,4,5], 4))