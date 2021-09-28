// Very Large Power
// Problem Description

// Given two Integers A, B. You have to calculate (A ^ (B!)) % (1e9 + 7).

// "^" means power ,

// "%" means "mod", and

// "!" means factorial.

// Problem Constraints
// 1 <= A, B <= 5e5

// Input Format
// First argument is the integer A
// Second argument is the integer B

// Output Format
// Return one integer, the answer to the problem

function solve(A, B) {
  let mod = 1000000007
  let mul = 1
  for(let i=1; i<=B; i++) {
    mul *= i
  }

let x = mul % (mod - 1)
  
  function power(x, y, p) {
    let res = 1;
    x = x % p; 
    if (x == 0)
        return 0;

    while (y > 0)
    {
        if (y & 1)
            res = (res * x) % p;

        y = y >> 1;
        x = (x * x) % p;
    }
    return res;
  }
  return power(A, x, mod)
}

console.log(solve(1, 1), 1)
console.log(solve(2, 2), 4)
console.log(solve(2, 27), 666348826)

