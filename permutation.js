function solve(A) {
  let result = [];
  const permutaion = (arr) => {
      if(arr.length == A.length)
          return result.push([...arr]);

      let filtered = A.filter(e =>!arr.includes(e));

      for(let i=0; i<filtered.length; i++) {
          arr.push(filtered[i]);
          permutaion(arr);
          arr.pop();
      }
  }

  permutaion([]);
  return result;
}

const A = [1,2,3]
console.log(solve(A))