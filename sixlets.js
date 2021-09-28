// SIXLETS
// Problem Description

// Given a array of integers A of size N and an integer B.

// Return number of non-empty subsequences of A of size B having sum <= 1000.

// Problem Constraints
// 1 <= N <= 20
// 1 <= A[i] <= 1000
// 1 <= B <= N

// Input Format
// The first argument given is the integer array A.

// The second argument given is the integer B.



// Output Format
// Return number of subsequences of A of size B having sum <= 1000.

function solve(A, B) {
  let sum = 0;
  let count = 0;
  let index = 0;
  let ans = 0;

  function recursion(A, B, sum, count, index) {
    if(sum > 10 * 10 * 10) return;
    if(count === B) {
      ans += 1
      return;
    }
    if(index === A.length) return;

    recursion(A, B, sum + A[index], count+1, index+1)
    recursion(A, B, sum, count, index+1) 
  }
  recursion(A, B, sum, count, index)
  return ans
}

const A = [1,2,8] 
const B = 2
console.log(solve(A, B), 3)
console.log(solve([5,17,1000,11], 4), 0)
