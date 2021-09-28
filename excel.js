function convertToTitle (A) {
  let a = '';

  while(A > 0) {
    A = A - 1;
    let rem = A % 26;
    A  = Math.floor(A / 26);
    a = String.fromCharCode(65 + rem) + a;
  }

  return a;
}

function convertToNumber (A) {
  let sum = 0
  A = A.split('')
  let pow = 0
  for(let i = A.length-1; i>=0 ; i--) {
    sum += (A[i].charCodeAt(0) - 64) * Math.pow(26, pow)
    pow++
  }
  return sum
}

let A = 3;
let B = 27;
console.log(convertToTitle(A), "C")
console.log(convertToTitle(B), "AA")

let C = "C";
let D = "AA"
console.log(convertToNumber(C), 3)
console.log(convertToNumber(D), 27)