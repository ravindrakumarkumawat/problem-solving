// Construct Array
// Problem Description

// Simba has an integer array of length A. Despite having insisted alot, He is not ready to reveal the array to his friend Expert. But now, he is ready to reveal some hints about the array and challenges Expert to find the values of his hidden array. The hints revealed are as follows:

// The array is sorted by values in ascending order.
// All the elements in the array are distinct and positive (greater than 0).
// The array contains two elements B and C such that B < C.
// Difference between all adjacent (consecutive) elements are equal.
// Among all the arrays satisfying the above conditions, his array has the minimum possible maximum element value.
// If there are multiple possible arrays, his array will have minimum possible minimum element value.
// Can you help Expert to construct such an array and surprise Simba?

// Problem Constraints
// 2 <= A <= 50
// 1 <= B < C <= 50

// Input Format
// First argument is an integer A.
// Second argument is an integer B.
// Third argument is an integer C.

// Output Format
// Return a sorted integer array having length N, denoting Simba's Secret Array.

// Example Input
// Input 1:
//  A = 5
//  B = 20
//  C = 50 
// Input 2:
//  A = 2
//  B = 2
//  C = 3 

// Example Output
// Output 1:
//  [10, 20, 30, 40, 50]
// Output 2:
//  [2, 3]

function solve(A, B, C) {
  
}

const A = 5;
const B = 20;
const C = 50;

console.log(solve(A, B, C))

const D = 2
const E = 2
const F = 3
console.log(solve(D, E, F))
