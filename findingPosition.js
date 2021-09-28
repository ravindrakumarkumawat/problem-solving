function solve(A) {
  for(let i=0; ;i++) {
    if(Math.pow(2, i) <= A && A < Math.pow(2, i+1)) {
      return Math.pow(2, i)
    } 
  }
}

console.log(solve(10))
console.log(solve(11))
console.log(solve(12))
console.log(solve(13))
console.log(solve(14))
console.log(solve(15))
console.log(solve(16))
console.log(solve(17))
console.log(solve(18))
console.log(solve(19))
console.log(solve(20))
console.log(solve(21))
console.log(solve(32))
console.log(solve(8))
console.log(solve(7))
console.log(solve(4))
console.log(solve(5))
console.log(solve(2))

