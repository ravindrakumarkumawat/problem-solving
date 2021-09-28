function jump(A, B) {
  let low = 0
  let high = A.length-1
  let steps = Math.floor(Math.sqrt(A.length))

  for(let i=0; i<steps; i++) {
    if(B < A[steps]) {
      high = steps - 1
    } else {
      low = steps + 1
    }
  }

  while(low <= high) {
    if(A[low] === B) {
      return low
    }
    low++
  }
  return -1
}


function jumpSearch(arr, x, n)
{
    let step = Math.sqrt(n);
    let prev = 0;

    while (arr[Math.min(step, n)-1] < x)
    {
        prev = step;
        step += Math.sqrt(n);
        if (prev >= n)
            return -1;
    }

    while (arr[prev] < x)
    {
        prev++;
        if (prev == Math.min(step, n))
            return -1;
    }

    if (arr[prev] == x)
        return prev;
   
    return -1;
}

let A = [0, 1, 1, 2, 3, 5, 8, 13, 21,
  34, 55, 89, 144, 233, 377, 610];
let B = 55
console.log(jump(A, B))
console.log(jumpSearch(A, B, A.length))