function gcd(A, B) {
  if(A === 0) return B
  if(B === 0) return A
  return gcd(B%A, A)
}

function gcdRemoveFromArray(A) {
  let prefixGCD = new Array(A.length).fill(0);
  let suffixGCD = new Array(A.length).fill(0);

  prefixGCD[0] = A[0];
  for(let i=1; i<A.length; i++) {
    prefixGCD[i] = gcd(prefixGCD[i-1], A[i])
  }

  suffixGCD[A.length -1] = A[A.length -1]
  for(let i=A.length-2; i>=0; i--) {
    suffixGCD[i] = gcd(suffixGCD[i+1], A[i])
  }
  let ans = -Infinity
  for(let i=0; i< prefixGCD.length; i++) {
    if(i==0) {
      ans = Math.max(suffixGCD[i+1], ans)
    } else if(i === prefixGCD.length-1) {
      ans = Math.max(prefixGCD[i-1], ans)
    } else {
      ans = Math.max(gcd(prefixGCD[i-1], suffixGCD[i+1]), ans)
    }
  }

  console.log(prefixGCD, suffixGCD)
  return ans
}

let A = 3;
let B = 9;
// console.log(gcd(A, B))

let C = [ 21, 7, 3, 42, 63 ]
// console.log(gcdRemoveFromArray(C))

function PUBG(A) {
  let gc = A[0]
  for(let i=1; i< A.length; i++) {
    gc = gcd(gc, A[i])
  }
  return gc
} 
let D = [6, 4]
let E = [2, 3, 4]
// console.log(PUBG(D), 2)
// console.log(PUBG(E), 1)

function lcm (A, B) {
  let min = Math.min(A, B)
  while(true) {
    if(min % A === 0 && min % B === 0) {
      return min
    } 
    min++
  }
}

// gcd * lcm = A * B

console.log(lcm(1, 4), (1 * 4)/gcd(1, 4))
console.log(lcm(2, 3))
console.log(lcm(2, 4))