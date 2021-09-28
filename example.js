function solve(A){
  let max = Math.max(...A)
  let bitmax = []
  while(max > 0) {
      let rem = max % 2;
      max = Math.floor(max / 2)
      bitmax.push(rem)
  }
  let l = bitmax.length;
  
  
  let b = []
  for(let i=0; i<A.length; i++) {
      let bit = []
      let max1 = A[i]
      while(max1 > 0) {
          let rem = max1 % 2;
          max1 = Math.floor(max1 / 2) 
          bit.push(rem)
      }
      while(bit.length < l) {
          bit.push(0)
      }
      b.push(bit)
  }
  console.log(b)
  let count = 0

  let col = 0;
  while(col < b[0].length){
    const column = [];
    for(let i=0; i<b.length; i++){
      column.push(b[i][col]);
    }
    
    let total = (column.length * (column.length + 1)) / 2
    let zero = column.filter((v) => v === 0)
    let totalzero = (zero.length * (zero.length + 1)) / 2
    console.log(column, total, zero.length, (total - totalzero))
    count = count + (total - totalzero)*Math.pow(2, col)
    col++
  }

  return count
}

const A = [5, 14, 9]
const A1 = [7, 8, 9, 10]
console.log(solve(A1))