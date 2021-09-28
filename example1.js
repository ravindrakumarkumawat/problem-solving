function solve(A) {
  
  let booleanA = new Array(A+1).fill(true);
  booleanA[0] = false
  for(let i=2; i*i<=A; i++){
      if(booleanA[i]=== true) {
          for(let j=i; j*i<=A; j++) {
              booleanA[i * j] = false
          }
      }
  }
  console.log(booleanA)
  let prime = []

  for(let i=0; i<booleanA.length; i++) {
    if(booleanA[i]) {
      prime.push(i)
    }
  }
  // console.log(prime)
  
  let B = []
  for(let i=4; i<=A; i++) {
    let count = 0
    for(let j=0; j<prime.length; j++) {
      if(i % prime[j] === 0) {
        count++
      }
    }
    B.push(count)
  }
  B = B.filter((v) => {
    if(v === 2) return v
  })

  // console.log(B)
  return B.length
}

let A = 8
let B = 12
// console.log(solve(A), 1)
// console.log(solve(B), 3)

function openCloseDoor(A) {
  
  let booleanA = new Array(A+1).fill(true);
  booleanA[0] = false
  for(let j=2; j<=A; j++) {
    for(let i=2; i<=A; i++){
      if(i % j === 0) {
        if(booleanA[i]) {
          booleanA[i] = false
        } else {
          booleanA[i] = true
        }
      }
    }
  }
  // console.log(booleanA)
  booleanA = booleanA.filter((v) => {
    if(v) return v
  })
  return booleanA.length
}

let C = 5;
let D = 6;
console.log(openCloseDoor(C))
console.log(openCloseDoor(D))