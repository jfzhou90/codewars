function removeZeros(array) {
  var end = array.length;
  for (var i = 0; i < end; i++) {
      if (array[i] === 0 || array[i] === "0") {
          arrayShiftToEnd(array, i);
          i--;
          end--;
      }
  }
  return array;
}

function arrayShiftToEnd(array, n) {
  var end = array[n]
  for(var i = n; i <  array.length; i++) {
      array[i] = array[i + 1]
  }
  array[array.length - 1] = end;

  return array
}