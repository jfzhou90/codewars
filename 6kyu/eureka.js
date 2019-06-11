function sumDigPow(a, b) {
  let result = [];
  for(let i = a; i <= b; i++){
    let compare = i.toString().split('').map((number, index) => Math.pow(number,index+1)).reduce((a,b)=>a+b);
    
    if(compare == i) {
      result.push(i)
    }
  }
  return result;
}
