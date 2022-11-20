// https://www.hackerrank.com/challenges/bon-appetit/problem?isFullScreen=true&fbclid=IwAR2TWChGZpLgys1e2tD8Hg01-hVa6JKpFbBOKDX51aBBR7um_G5Ui4lHLqE

function bonAppetit(bill, k, b) {
  // Write your code here
  const correctCalc = bill.filter((item, index) => index !== k).reduce((sum, num) => sum + num) / 2;
  console.log(correctCalc === b ? "Bon Appetit" : Math.abs(b - correctCalc));
}
