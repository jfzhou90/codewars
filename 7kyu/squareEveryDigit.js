function squareDigits(num){
  let result = '';
  num.toString().split('').forEach(number => {
    result += number*number;
  });
  return parseInt(result)
}