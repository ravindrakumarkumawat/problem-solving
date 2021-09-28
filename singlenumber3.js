function solve (A) {
  A = A.sort((a, b) => a - b)
  let B = []
  for(let i=0; i<A.length; i++){
    if(A[i] === A[i+1]) {
      i++
    } else {
      B.push(A[i])
    }
  }
  return B
}

const A = [1, 2, 3, 1, 2, 4]
// const B = [1, 2]
// console.log(solve(A), [3, 4])
// console.log(solve(B), [1,2])

console.log(solvexor(A), [3, 4])
// console.log(solvexor(B), [1,2])

function solvexor (A) {
  let xor = 0
  for(let i = 0; i< A.length; i++) {
    xor = xor ^ A[i];
  }
  let index = 0
  for(let j = 0; j<32;  j++) {
    if(xor & (1 << j) === 1) {
      index = j;
      break;
    }
  }
  let xor1 = 0
  let xor2 = 0
  for(let i=0; i< A.length; i++) {
    if(A[i] & (1<<index) === 1) {
      xor1 = xor1 ^ A[i]
      console.log( xor1)
    } else {
      xor2 = xor2 ^ A[i]
      console.log(xor2)
    }
  }
  
  return [xor1, xor2]
}
console.log(solvexor2([ 186, 256, 102, 377, 186, 377 ]), [102, 256])

function solvexor2 (A) {
  let xor = 0
  A.forEach(ele => (xor ^= ele))
  xor = (xor & (xor-1)) ^ xor;
  let a = 0
  let b = 0
  A.forEach((ele) => {
    if(ele & xor) a ^= ele
    else b ^= ele
  }) 
  if(a > b) [a, b] =[b, a]
  return [a, b]
}