function solve(A) {
  let mod = 1000000007
  let sum = 0;

  function diffbitCount(a, b) {
    let count = 0;
    let n = a ^ b;
    while (n) {
      count += n & 1;
      n >>= 1;
    }
    return count;
  }
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (i != j) {
        sum += diffbitCount(A[i], A[j]);
      }
    }
  }
  return sum;
}
const A = [1, 3, 5];
const B = [2, 3];
console.log(solveOptimize(A), 8);
console.log(solveOptimize(B), 2);

function solveOptimize(A) {
  let mod = 1000000007
  let ans = 0
  for(let i=0; i< 32; i++) {
    let count = 0
    for(let j=0; j< A.length; j++) {
      if(A[j] & (1<<i)) {
        count++
      }
    }
    ans += 2 * count * (A.length - count)
    ans %= mod
  }
  return ans
}
