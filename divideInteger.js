function solve(A, B) {
  if(A < 0 && B < 0) {
    A = Math.abs(A) - 1
    B = Math.abs(B)
  }
  if(B === 1) return A
  if(B === A) return 1 
  let count = 0
  while(A >= B) {
    A = A - B
    count++
  }
  return count
}

const A = 5
const B = 2
console.log(solve(A, B)) 

const C = 7
const D = 1
console.log(solve(C, D))

const E = -5700836
const F = -7169730
console.log(solve(E, F))  