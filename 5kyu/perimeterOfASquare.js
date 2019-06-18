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