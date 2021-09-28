function solve(n, r, m) {
  let rA = new Array(r+1).fill(0);
  let C = new Array(n+1).fill(rA);

  for(let i=0; i<=n; i++) {
    for(let j=0; j<=r; j++) {
      if(j>r) {
        C[i][j] = 0
      }
      else if(j===0 || j === i || j-1 ===0 || i-1 === 0) {
        C[i][j] = 1
      } else {
        C[i][j] = C[i-1][j-1] + C[i-1][j];
      }
    }
  }
  console.log(C)
  return C[n][r] % m
}

console.log(solve(5, 2, 13))