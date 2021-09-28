function searchMatrix(A, B) {
  // if(A[0].length === 1) {
  //   for(let i=0; i< A.length; i++) {
  //     if(A[i][0] === B) {
  //       return 1
  //     } 
  //   }
  //   return 0
  // }

  // while(A.length > 0) {
  //   let topRightElement = A[0][A[0].length-1]
  //   if(topRightElement < B) {
  //       A = A.slice(1, A.length)
  //   } else if(topRightElement > B){
  //       A = A.map((a) => a.slice(0, a.length-1-1))
  //   } else {
  //       return 1
  //   } 
  // }

  // return 0
  let ans = 0
  for(let i=0; i<A.length; i++) {
    let a = A[i]
    let low = 0
    let high = a.length
    while(low <= high) {
      let mid = low + Math.floor((high - low) / 2)
      if(a[mid]===B){
        ans = 1
        break
      } else if(a[mid] < B) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return ans
}

const A = [
  [3, 3, 11, 12, 14],
  [16, 17, 30, 34, 35],
  [45, 48, 49, 50, 52],
  [56, 59, 63, 63, 65],
  [67, 71, 72, 73, 79],
  [80, 84, 85, 85, 88],
  [88, 91, 92, 93, 94]
]

const B = 94

console.log(searchMatrix(A, B), 1)
const C = [
  [3],
  [29],
  [36],
  [63],
  [67],
  [72],
  [74],
  [78],
  [85]
]

const D = 41
console.log(searchMatrix(C, D), 0)

const E = [
  [1, 1, 2, 2, 5, 6, 6, 6, 7],
[9, 10, 10, 12, 12, 13, 14, 21, 21],
[23, 26, 26, 29, 29, 31, 32, 35, 37],
[38, 39, 39, 39, 41, 41, 42, 42, 43],
[45, 45, 46, 46, 46, 47, 48, 48, 51],
[51, 51, 54, 54, 54, 54, 56, 58, 59],
[60, 61, 61, 62, 63, 64, 65, 66, 67],
[67, 67, 70, 70, 71, 73, 73, 73, 74],
[74, 79, 79, 80, 82, 84, 84, 84, 87],
[89, 93, 94, 94, 97, 98, 98, 98, 98]]
const F = 64
console.log(searchMatrix(E, F), 1)

const G = [
  [2, 3, 4, 6],
  [16, 19, 33, 36],
  [37, 38, 38, 41],
  [47, 47, 50, 51],
  [55, 57, 58, 62],
  [63, 65, 66, 66],
  [68, 70, 75, 77],
  [78, 84, 84, 86],
  [86, 87, 88, 92],
  [94, 95, 96, 97]
]
const H  = 81

console.log(searchMatrix(G, H), 0)