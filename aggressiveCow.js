function solve(A, B) {

  let l = 0
  let h = Math.floor((Math.max(...A) - Math.min(...A)) / (B-1))

  while(l <= h) {
    let m = l+ Math.floor((h-l) / 2)
    
    let last = A[0]
    let remaining = B - 1
    for(let i = 1; i< A.length; i++) {
      if(A[i] - last >= m) {
        remaining--
        last = A[i]
        if(remaining === 0) {
          break
        }
      }
    }
    if(remaining === 0) {
      l = m+1
    } else {
      h = m - 1
    }
  }
  return h
}

const A = [1,2]
const B = 2
console.log(solve(A, B))