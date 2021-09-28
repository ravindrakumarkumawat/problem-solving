function solve(A, B) {
  let n = A.length;
  count = 0
  for(let i=0; i< n; i++) {
    if(A[i] <= B) count++
  }
  if(count <=1) return 0
  else {
    let l = 0
    let r = 0
    let x = 0
    while(r < count) {
      if(A[r] > B) {
        x++
      }
      r++
    }
    let ans = x
    while(r < n) {
      if(A[r] > B) {
        x++
      } 
      if(A[l] > B) {
        x--
      }
      ans = Math.min(ans, x)
      r++
      l++
    }
    return ans
  }
}

const A = [1, 12, 10, 3, 14, 10, 5]
const B = 8

console.log(solve(A, B), 2)

const C = [5, 17, 100, 11]
const D = 20

console.log(solve(C, D))

const E = [ 52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5, 84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29, 7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70 ]
const F = 19

console.log(solve(E, F))