function selectionSort(A) {
  for(let i=0; i< A.length; i++) {
    let temp = A[i]

    let smallest = A[i]
    let pos = i
    for(let j=i+1; j<A.length; j++) {
      if(A[j] <smallest) {
        smallest = A[j]
        pos = j
      }
    }

    A[i]  = A[pos]
    A[pos] = temp
  }
  return A
}
const A = [8,7,6,5,4,3,2,1]
console.log(selectionSort(A))