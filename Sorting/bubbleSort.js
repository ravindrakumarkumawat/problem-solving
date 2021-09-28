function bubbleSort(A) {
  let I = A.length -1
  while(I > 0) {
    for(let i=0; i<I; i++) {
      if(A[i] > A[i+1]) {
        let temp = A[i+1]
        A[i+1] = A[i]
        A[i] = temp
      }
    }
    I--
  }
  return A
}

function bubbleSortEfficient(A) {
  let I = A.length -1 
  while(I > 0) {
    let isSorted  = 1
    for(let i=0; i<I; i++) {
      if(A[i] > A[i+1]) {
        isSorted = 0
        let temp = A[i+1]
        A[i+1] = A[i]
        A[i] = temp
      }
    }
    I--
    if(isSorted) {
      return A
    }
  }
  return A
}

const A = [39, 9, 45, 63, 18, 81, 108, 54, 72, 36]
console.log(bubbleSort(A))
console.log(bubbleSortEfficient(A))