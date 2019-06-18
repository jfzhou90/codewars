// passes, couldn't submit final, due to timing out
// needs a more efficient way to compute this.
function perimeter(n) {
  let sum = 0;
  for(let i = 0, number = n+1; i < number; i++){
    sum += fib(i);
  }
  return sum*4;
}

function fib(num) {
  if (num <= 1) return 1;
  return fib(num - 1) + fib(num - 2);
}


//not my code, but I borrowed to it to pass.
const SQRT5 = Math.sqrt(5);
const PHI = (SQRT5 + 1) / 2;
const fib = n => Math.round(PHI**n / SQRT5);
const perimeter = n => 4 * fib(n + 3) - 4;