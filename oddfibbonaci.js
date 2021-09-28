function solve(A, B) {
  let count = 0
  for(let i=A; i<=B; i++) {
    if(i % 3 !== 0) {
      count++
    }
  }
  return count 
}

console.log(solve(2, 6))
console.log(solve(6, 20))