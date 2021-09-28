// Single Number II
// Problem Description

// Given an array of integers, every element appears thrice except for one which occurs once.

// Find that element which does not appear thrice.

// NOTE: Your algorithm should have a linear runtime complexity.

// Could you implement it without using extra memory?

function solve(A) {
  let frequency  = {}
  for(let i=0; i< A.length; i++) {
    if(frequency.hasOwnProperty(A[i])){
      frequency[A[i]]++
    } else {
      frequency[A[i]] = 1
    }
  }

  for(let key in frequency) {
    if(frequency[key] % 3 !== 0) {
      return key * 1
    }
  }
}

const A = [1,2,4,3,3,2,2,3,1,1]
console.log(solve(A), 4)