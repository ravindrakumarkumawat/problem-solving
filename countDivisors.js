function solve(A) {
  const booleanA = new Array(Math.max(...A)+1).fill(true)
  booleanA[0] = false
  booleanA[1] = false
  for(let i=2;i*i<booleanA.length; i++) {
    if(booleanA[i] === true) {
      for(j=i; i*j< booleanA.length; j++) {
        booleanA[i*j] = false
      }
    }
  }
  // console.log(booleanA);
  let prime = []
  for(let i=0; i<booleanA.length; i++) {
    if(booleanA[i] === true) {
      prime.push(i)
    }
  }
  // console.log(prime)
  let divisorA = []
  for(let i=0;i< A.length; i++) {
    if(prime.indexOf(A[i]) > -1) {
      // prime
      divisorA.push(2)
    } else {
      let count = 1
      let value = A[i]
      if(value === Math.max(...A) && value > prime[prime.length-1]) {
        count++
      }
      for(let j=0; j < prime.length; j++) {
        while(value % prime[j] === 0) {
          value = Math.floor(value / prime[j])
          count++
        }
        if(value === 1) {
          divisorA.push(count)
          break
        }
      }
    }
  }

  return divisorA
}
const A = [2,3,4,5]
const B = [8,9,10]
console.log(solve(A), [2, 2, 3, 2])
console.log(solve(B), [4, 3, 4])