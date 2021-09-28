function solve(A){
  let isNegative = true
  for(let i=0; i<A.length; i++) {
    if(isNegative) {
      isNegative = false
      if(A[i] >= 0) {
        let j = A.slice(i+1).findIndex(a => a < 0)
        if(j > -1) {
          j = i + j + 1
          let l = A[j]
          for(let k=j; k>i; k--) {
            A[k] = A[k-1]
          }
          A[i] = l
        } else {
          break
        }
      }
    } else {
      isNegative = true
      if(A[i] < 0) {
        let j = A.slice(i+1).findIndex(a => a >= 0)
        if(j > -1) {
          j = i + j + 1
          let l = A[j]
          for(let k=j; k>i; k--) {
            A[k] = A[k-1]
          }
          A[i] = l
        } else {
          break
        }
      }
    }
  }
  return A
}

const A = [-1, -2, -3, 4, 5]
const B = [5, -17, -100, -11]
const C = [ -23, -24, -1, -25, 22, 1, 22, -28, 0, 3, -24, 6, 0, -23, 7, 5, 17, 18, 14, 5, 20, -25, -13, 26, 13, -29, -7, 5, -4, 9, -30, 20, 11, -11, 22, 1, -19, 24, -15, 3, 17, -28, 30, -20, 30, 20, -14, -28, 18, 10, -28, -25, -12, -21, 15, 0, 6, -15, 25, -25, 13, -24, 14, -22, 9, -23, 5, -12, 6, -11, -12, 10, -12, -2, -8, 4, 17, -11, -4, 18, 11, -1, 1, -21, 14, -11, -18, 19, 17, 9, -5, 8, -3, -6, -18, 19, -18, -5, -8, -29, -4, -27, 12, 2, 30, 8, 19, 11, -16, 20, -22, 8, -27, -15, -12, 9, -10, 10, 22, 16, -9, -12, 9, -28, 2, 18, -28, -26, 21, 27, -18, -13, -17, 20, 2, 11, 16, -11 ]
console.log(solve(A))
console.log(solve(B))
console.log(solve(C))
