function solve(A) {
  A = A.split("").map(Number).map((v) => v===1 ? -1 : 1)
  let temp_start = 0
  let temp_end = 0
  let start = -1
  let end = -1
  let move_start = 0
  for(let i = 0; i<A.length;i++){
    if(temp_end+A[i]<0) {
      move_start = i+1
      temp_end = 0
    } else {
      temp_end += A[i]
    }
    if(temp_end > temp_start) {
      temp_start = temp_end
      start = move_start
      end = i
    }
  }
  if(start === -1) return []
  return [start+1, end+1]
}

const A = "010"
console.log(solve(A), [1, 1])