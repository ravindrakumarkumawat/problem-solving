function insertionSort(A) {
  for(let i=1; i<A.length; i++) {
    let temp = A[i]
    let j = i-1
    while((temp < A[j]) && (j >=0)) {
      A[j+1] = A[j]
      j--
    }
    A[j+1] = temp
  }
  return A
}

const A = [39, 9, 45, 63, 18, 81, 108, 54, 72, 36]
console.log(insertionSort(A))