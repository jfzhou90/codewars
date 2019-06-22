function isPowerOfTwo(n){
  let limit = Math.sqrt(n);
  for(let i = 0; i < limit; i++){
    if(Math.pow(2, i) == n) {
      return true
    }
  }
  return false;
}

//not my code
function isPowerOfTwo(n){
  return Number.isInteger(Math.log2(n));
}