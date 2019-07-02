//first attempt, server timed out, inefficient.
function productFib(prod){
  let fib1;
  let fib2;
  for(let i = 0; i < prod; i++) {
    fib1 = fib(i);
    fib2 = fib(i+1);
    if(fib1*fib2 == prod){
      return [fib1,fib2, true]
    }
  }
  
  return [fib1,fib2, false]
}

function fib(n){
  if(n <=1) return 1;
  return fib(n-1) + fib(n-2);
}

// found a more efficient way after doing some googling.
function productFib(prod){
  let [n,nPlus] = [0,1];
  while(n*nPlus < prod) {
    nPlus += n;
    n = nPlus - n;
  }
  return [n, nPlus, n*nPlus===prod];
}