// Trailing Zeros in Factorial
// Problem Description

// Given an integer A, return the number of trailing zeroes in A! i.e. factorial of A.

// Note: Your solution should run in logarithmic time complexity.

function solve(A) {
  if(A < 0) return -1;
  let count = 0;
  for (let i = 5; Math.floor(A / i) >= 1; i *= 5)
    count += Math.floor(A / i);
  return count;
}

console.log(solve(30))