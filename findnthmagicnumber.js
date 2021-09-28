// Find nth Magic Number
// Problem Description

// Given an integer A, find and return the Ath magic number.

// A magic number is defined as a number which can be expressed as a power of 5 or sum of unique powers of 5.

// First few magic numbers are 5, 25, 30(5 + 25), 125, 130(125 + 5), ….



// Problem Constraints
// 1 <= A <= 5000

function solve(A) {
  let count = 0
  for(let i=0; i<32; i++) {
    count += (A >> i & 1) * Math.pow(5, i+1)
  }
  return count
}
console.log(solve(3), 30)
console.log(solve(10), 650)