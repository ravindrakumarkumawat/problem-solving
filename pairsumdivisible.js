function solve(A, B) {
  // let count = 0
  // for(let i=0; i<A.length; i++) {    
  //   for(let j=i+1; j<A.length; j++) {
  //     let sumpair = A[i] + A[j]
  //     if(sumpair % B === 0) {
  //       count++
  //     }
  //   }
  // }
  // return count
  // for(let i=0; i< A.length;i++) {
  //   A[i] = A[i] % B
  // }
  let n = A.length
  let cnt = new Array(B).fill(0)
  let mod = 1000000007
  for(let i=0; i< n; i++) {
    cnt[A[i]%B]++
  }
  let ans = (cnt[0] * (cnt[0] - 1))/2
  ans = ans % mod
  let i=1, j = B-1
  while(i<=j) {
    if(i == j) {
      ans += (cnt[i] * (cnt[j] - 1)) / 2
      ans %= mod
    } else {
      ans+= cnt[i] * cnt[j]
      ans %= mod
    }
    i++
    j--
  }
  return ans
}

const A = [1,2,3,4,5]
const B = 2
console.log(solve(A, B), 4)

const C = [5, 17, 100, 11]
const D = 28
console.log(solve(C, D), 1)