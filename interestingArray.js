// You have an array A with N elements. We have 2 types of operation available on this array :
// We can split a element B into 2 elements C and D such that B = C + D.
// We can merge 2 elements P and Q as one element R such that R = P^Q i.e XOR of P and Q.
// You have to determine whether it is possible to make array A containing only 1 element i.e. 0 after several splits and/or merge?

function solve(A) {
  if(A.length <= 1) return "No"
  let xor = 0
  for(let i=0; i< A.length; i++) {
    xor = xor ^ A[i]
  }
  if(xor === 0) {
    return "Yes"
  }
  if(xor & 1) {
    return "No"
  } else {
    return "Yes"
  }
}

const A = [9, 17]
const B = [1]
console.log(solve(A), "Yes")
console.log(solve(B), "No")