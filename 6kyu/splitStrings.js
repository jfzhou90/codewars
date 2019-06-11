function solution(str){
  str = (str.length % 2 === 0) ? str : str + "_";
  return str.match(/.{1,2}/g);
}

function solution(str){
  return (str + "_").match(/../g);
}