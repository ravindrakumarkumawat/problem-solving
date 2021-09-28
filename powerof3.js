function solve(A) {  
  let j=0
  for(let i=0; i< 32; i++) {
    if(Math.pow(3, i) <= A && A < Math.pow(3, i+1)) {
      j=i;
    } 
  }

  let B = []
  for(let i=j; i>=0; i--) {
    if(A - Math.pow(3, i) >= 0) {
      A = A-Math.pow(3, i);
      B.unshift(Math.pow(3, i))
    }
    if(A - Math.pow(3, i) >= 0) {
      A = A-Math.pow(3, i);
      B.unshift(Math.pow(3, i))
    }
  }
  return B
}

const A = 13;
const B = 3;
const C = 411;
console.log(solve(A), [1,3,9])
console.log(solve(B), [3])
console.log(solve(C), [3, 3, 81, 81, 243])