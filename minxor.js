function findMinXor(A) {
  let min = Math.pow(2, 32);
  for(let i = 0; i< A.length; i++) {
    for(let j=i+1; j<A.length; j++) {
      if(i != j) {        
        min = Math.min(A[i] ^ A[j], min)
      }
    }
  }
  return min
}

const A = [0, 2, 5, 7]
const B = [0, 4, 7, 9]

console.log(findMinXor(A), 2)
console.log(findMinXor(B), 3)

// A
// 0000
// 0010
// 0101
// 0111
// ----
// 0010 ans

// B
// 0000
// 0100
// 0111
// 1001
// ----
// 0011 ans

function findMinXor1 (A) {
  let min = Math.pow(2, 32) 
  for(let i=0; i<A.length-1; i++) {
    min = Math.min(min, A[i] ^ A[i+1])
  }
  return min
}

console.log(findMinXor1(A), 2)
console.log(findMinXor1(B), 3)