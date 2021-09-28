// function solve(A) {
//   let left = 0
//   let loc = 0
//   let right = A.length - 1

//   while(left < right) {
//     if(A[right] > A[loc]) {
//       right--
//     } else if(A[right] < A[loc]) {
//       let temp = A[right]
//       A[right] = A[loc]
//       A[loc] = temp
//       loc = right
//     } else if(A[loc] > A[left]) {
//       left++
//     } else if(A[loc] < A[left]) {
//       let temp = A[loc]
//       A[loc] = A[left]
//       A[left] = temp
//       loc = left
//     } else {
//       if( loc === right) {
//         right--
//         loc = right
//       } else {
//         left++
//         loc = left
//       }
//     }
//   }
//   return A
// }

function partition(A, BEG, END) {
  let left = BEG
  let loc = left
  let right = END
  let flag = 0

  while(flag != 1) {
    while((A[loc] <= A[right]) && loc !== right) {
      right--
    }
    if(loc === right) {
      flag = 1
    } else if(A[loc] > A[right]) {
      let temp = A[loc]
      A[loc] = A[right]
      A[right] = temp
      loc = right
    }
    if( flag !== 1) {
      while((A[loc] >= A[left]) && (loc != left)) {
        left++
      } 
      if(loc === left) {
        flag = 1
      } else if(A[loc] < A[left]) {
        let temp = A[loc]
        A[loc] = A[left]
        A[left] = temp
        loc = left
      }
    }
  }
  return loc
}

function quickSort (A, BEG, END) {
  if(BEG < END) {
    let loc = partition(A, BEG, END)
    quickSort(A, BEG, loc-1)
    quickSort(A, loc+1,  END)
  }
}

function solve(A) {
  quickSort(A, 0, A.length-1)
  return A
}

const A = [27, 10, 36, 18, 25, 45]
console.log(solve(A))