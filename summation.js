// SUMMATION
// Problem Description

// Given an integer A.

// Calculate the sum = (ACr) * (r) * (r - 1) * (2 ki power r-2) for all r from 0 to A.

// Return sum % 109 + 7.

// Acr * r * r-1 * 2 pow r-2 = A * A-1 * (3 pow A - 2)

function solve(A) {
  let mod = 1000000007;

  function fact (n) {
    if(n === 1) return 1
    return n * fact(n-1);
  }

  function ncr(n, r) {
    if(n === r) {
      return 1
    }
    if(r === 0) {
      return 1
    }
    if(r === 1) {
      return n
    }
    return (fact(n)/(fact(r) * fact(n-r)))%mod
  }

  function twopow (r) {
    return Math.floor(Math.pow(2, r-2)) % mod
  }
  let sum = 0
  for(let r=0; r<=A; r++) {
    sum += (ncr(A, r) * r * (r-1) * twopow(r)) % mod
  }
  return sum % mod
}

const A = 3;
console.log(solve1(A))

function solve1(A) {
  let mod = 1000000007
  A = A % mod
  let pow = Math.pow(3, A-2) % mod
  return (A * A-1 * pow)%mod
}