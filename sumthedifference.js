function solve(A) {
  let mod = 1000000007
  let ans = 0
    let path = new Array()
    function sequence(A, index, path) {
        if( index === A.length) {
            if(path.length > 0) {
                ans += (Math.max(...path) % mod) - (Math.min(...path) % mod)               
                return 
            }
        } else {
            sequence(A, index+1, path)
            path.push(A[index])
            sequence(A, index+1, path)
            path.pop()
        }
        return
    }
    
    sequence(A, 0, path)
    return ans % mod
}
const A = [5, 4, 2]
console.log(solve(A))