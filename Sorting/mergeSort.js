function solve(A) {
  // Divide the array
  function merge_sort(A, beg, end) {
    let mid;
    if(beg < end) {
      mid = Math.floor((beg+end)/2)
      merge_sort(A, beg, mid)
      merge_sort(A, mid+1, end)
      merge(A, beg, mid, end)
    }
  }

  // Compare and merging starts
  function merge(A, beg, mid, end) {
    let i = beg
    let j = mid+1
    let index = beg
    let temp = []
    while((i <=mid) && (j <= end)) {
      if(A[i] < A[j]) {
        temp[index] = A[i]
        i++
      } else {
        temp[index] = A[j]
        j++
      }
      index++
    }
    if(i > mid) {
      while(j<=end) {
        temp[index] = A[j]
        j++
        index++
      }
    } else {
      while(i<=mid) {
        temp[index] = A[i]
        i++
        index++ 
      }
    }
    for(let k = beg; k<index; k++) {
      A[k] = temp[k]
    }
  }
  merge_sort(A, 0, A.length - 1)
  return A
}

const A = [9, 39, 45, 81, 18, 27, 72, 90]
console.log(solve(A))