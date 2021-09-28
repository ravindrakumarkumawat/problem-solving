function solve (A, B) {
  let arr = new Array(B+1).fill(0) 
  function fib(N) {
      if(N <= 1) return N;
      if(arr[N] != 0) {
          return arr[N];
      }
      let ans = fib(N - 1) + fib(N - 2)
      arr[N] = ans;
      return ans
  }
  fib(B)
  arr[0] = 0
  arr [1] = 1
  arr = arr.slice(A)
  let c = arr.filter((v) => {
    if(v % 2 === 1) {
      return v
    }
  })
  console.log(c)
  return arr
}
const A = 2;
const B = 6;
console.log(solve(A, B))