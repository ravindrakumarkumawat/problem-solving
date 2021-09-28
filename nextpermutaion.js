function solve(A) {
  let idx = -1
  for(let i=A.length-1; i>=0; i--) {
    if(A[i] > A[i-1]) {
      idx = i-1
      break
    }
  }

  if(idx != -1) {
    let i = A.length-1
    while(A[i] < A[idx]) {
      i--
    }
    let temp = A[i]
    A[i] = A[idx]
    A[idx] = temp
  }
  let i = idx+ 1
  let j = A.length-1
  while(i<j) {
    [A[i++], A[j--]] = [A[j--], A[i++]]
    i++
    j--
    let temp = A[i]
    A[i] = A[j]
    A[j] = temp
  }
  return A
}

console.log(solve([1,2,3]), [1,3,2])
console.log(solve([3,2,1]), [1,2,3])

const A = [1, 2, 3] // 1, 3, 2
const B = [3, 2, 1] // N0
const C = [4, 1, 2, 3] // 4, 1, 3, 2
const D = [4, 2, 3, 1] // 4, 3, 1, 2
const E = [4, 3, 1, 2] // 4, 3, 2, 1

const F = [ 626, 436, 819, 100, 382, 173, 817, 581, 220, 95, 814, 660, 397, 852, 15, 532, 564, 715, 179, 872, 236, 790, 223, 379, 83, 924, 454, 846, 742, 730, 689, 112, 110, 516, 85, 149, 228, 202, 988, 212, 69, 602, 887, 445, 327, 527, 347, 906, 54, 460, 517, 376, 395, 494, 827, 448, 919, 799, 133, 879, 709, 184, 812, 514, 976, 700, 156, 568, 453, 267, 547, 8, 951, 326, 652, 772, 213, 714, 706, 972, 318, 768, 506, 59, 854, 422 ]
const G = [ 626, 436, 819, 100, 382, 173, 817, 581, 220, 95, 814, 660, 397, 852, 15, 532, 564, 715, 179, 872, 236, 790, 223, 379, 83, 924, 454, 846, 742, 730, 689, 112, 110, 516, 85, 149, 228, 202, 988, 212, 69, 602, 887, 445, 327, 527, 347, 906, 54, 460, 517, 376, 395, 494, 827, 448, 919, 799, 133, 879, 709, 184, 812, 514, 976, 700, 156, 568, 453, 267, 547, 8, 951, 326, 652, 772, 213, 714, 706, 972, 318, 768, 506, 422, 59, 854 ]
const r = [  59, 436, 819, 100, 382, 173, 817, 581, 220, 95, 814, 660, 397, 852, 15, 532, 564, 715, 179, 872, 236, 790, 223, 379, 83, 924, 454, 846, 742, 730, 689, 112, 110, 516, 85, 149, 228, 202, 988, 212, 69, 602, 887, 445, 327, 527, 347, 906, 54, 460, 517, 376, 395, 494, 827, 448, 919, 799, 133, 879, 709, 184, 812, 514, 976, 700, 156, 568, 453, 267, 547, 8, 951, 326, 652, 772, 213, 714, 706, 972, 318, 768, 506, 626, 854, 422]
console.log(solve(A))
console.log(solve(B))
console.log(solve(C))
console.log(solve(D))
console.log(solve(E))
console.log(solve(F))
console.log(solve(F) === G)

