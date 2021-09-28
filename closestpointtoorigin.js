function solve(A, B) {
  // let c = []
  // for(let i=0; i<A.length; i++) {
  //     c.push(Math.pow(A[i][0], 2) + Math.pow(A[i][1], 2))
  // }
  // console.log(c)
  // let sort1 = c.slice(0).sort((a, b) => a - b)
  // console.log(sort1)
  // sort1 = [...new Set(sort1)]
  // console.log(sort1)
  // let D = [] 
  // let i = 0
  // while(B > 0) {
  //     B--
  //     let v = sort1[i]
  //     console.log(v)
  //     let index = c.indexOf(v)
  //     console.log(index)
  //     D.push(A[index])
  //     i++
  // }
  // return D
  
    let n = A.length;
    let distance = new Array(n);
    for(let i = 0; i < n; i++)
    {
        let x = A[i][0], y = A[i][1];
        distance[i] = (x * x) + (y * y);
    }
  
    distance.sort(function(a,b){return a-b;});
    let distk = distance[B - 1];

    let b = []
    for(let i = 0; i < n; i++)
    {
        let x = A[i][0], y = A[i][1];
        let dist = (x * x) + (y * y);
          
        if (dist <= distk)
            b.push([x, y])
    }
    return b
}
const A = [ 
  [1, 3],
  [-2, 2] 
]
const B = 1
console.log(solve(A, B))