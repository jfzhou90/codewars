// first attempt
Math.roundTo = function (number, precision) {
  let a = number * Math.pow(10, precision);
  return Math.round(a)/Math.pow(10, precision);
}

Math.roundTo = (number, precision) => Number(number.toFixed(precision));