// function fact (A) {
//   if(A === 1) return 1
//   return A * fact(A-1);
// }

// function findRank(A) {  
//   let mul = fact(A.length)
//   let count = 1 
//   let a = []
//   for(let i=0; i<A.length; i++) {
//     let value = A[i]
//     let A1 = A.split('').slice(i+1).filter((v) => {
//       if(v.charCodeAt(0) < value.charCodeAt(0)) {
//         return v
//       }
//     }) 
//     // console.log(A, A1)
//     a.push(A1.length)
//   }
//   console.log(a)
//   for(let i=0; i< a.length; i++) {
//     mul /= A.length - i
//     count += mul * a[i]
//   }
//   return count
// }

// const A = "acb"
// console.log(findRank(A), 2)
// console.log(findRank("modesty"), 1681)
// console.log(findRank("string"), 598)
// console.log(findRank("DTNGJPURFHYEW"))
