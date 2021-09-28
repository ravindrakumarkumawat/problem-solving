function solve(A) {
  A = A.sort((a, b) => a - b)
  let m  = new Map()
  let ans = 0
  for(let i=0;i< A.length; i++) {
    if(m.has(A[i])) {
      m.set(A[i], m.get(A[i]) + 1)
    } else {
      m.set(A[i], 1)
    }
    ans = Math.max(ans, m.get(A[i]))
  }
  return ans
}

const B = [ 8, 15, 1, 10, 5, 19, 19, 3, 5, 6, 6, 2, 8, 2, 12, 16, 3, 8, 17, 12, 5, 3, 14, 13, 3, 2, 17, 19, 16, 8, 7, 12, 19, 10, 13, 8, 20, 16, 15, 4, 12, 3 ]

// console.log(solve(A))
console.log(solve(B))