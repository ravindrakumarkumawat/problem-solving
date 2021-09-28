function solve(A) {
  let a = []
  let curr = []
  for(let i=0; i< A.length; i++) {
    if(A[i] >= 0) {
      // console.log(A[i])
      curr.push(A[i])
      // console.log(curr)
    } else {
      a.push(curr)
      // console.log(a)
      curr = []
    }
  }
  if(curr.length >0) {
    a.push(curr)
    curr = []
  }
  let ele = a[0]
  let max = ele.reduce((acc, curr) => acc + curr, 0)
  for(let i=1; i< a.length; i++) {
    let ele2 = a[i]
    let sum = ele2.reduce((acc, curr) => acc + curr, 0)
    if(sum > max) {
      max = sum
    }
  }

  a = a.filter((b) => b.reduce((acc, curr) => acc + curr, 0) === max)
  console.log(a)
  if(a.length === 1) {
    return a[0]
  } else {
    let l = a[0].length
    let v = a[0]
    for(let i=1; i<a.length; i++) {
      if(a[i].length > l) {
        l = a[i].length
        v = a[i]
      }
    }
    return v
  }
}

// const A = [1, 2, 5, -7, 2, 3]
// console.log(solve(A))
console.log(solve([ 0, 0, -1, 0 ]), [0, 0])