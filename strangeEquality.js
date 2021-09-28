// Strange Equality
// Problem Description

// Given an integer A.
// Two numbers X and Y are defined as follows:

// X is the greatest number smaller than A such that XOR sum of X and A is the same as the sum of X and A.
// Y is the smallest number greater than A such that XOR sum of Y and A is the same as the sum of Y and A.
// Find and return the XOR of X and Y.

// NOTE 1: XOR of X and Y is defined as X ^ Y where '^' is the BITWISE XOR operator.

// NOTE 2: Your code will be run against a maximum of 100000 Test Cases.

// A + B = A ^ B + 2 * (A & B)
// A & B = 0

// X + A = X ^ A + 0
// 
// Y + A = Y ^ A + 0
function solve(A) {
  let Y = A+1
  let X = 0
  for(let i=0; i<32; i++) {
    if(A < Math.pow(2, i)) {
      if(A & Math.pow(2, i) === 0) {
        Y = Math.pow(2, i)
      }
    }
    if(A > Math.pow(2, i)) {
      if(A & Math.pow(2, i) === 0) {
        X = Math.pow(2, i)
      }
    }
  }
  return X ^ Y
}

const A = 5
console.log(solve(5), 10)