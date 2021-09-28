function solve(A) {
  let count = 0
  for(let i=0; i< A.length; i++) {
    if(A[i] !== i) {
      let temp = A[A[i]]
      A[A[i]] = A[i]
      A[i] = temp
      console.log(A)
      count++
      i--
    }
  }
  return count
}

const A = [1, 2, 3, 4, 0]
console.log(solve(A), 4)
const B = [2, 0, 1, 3]
console.log(solve(B),2)