function sortArray(array) {
  let oddNumbers = array.filter(element => element % 2).sort((a, b) => b - a);
  let evenNumbers = array.filter(element => !(element % 2)).sort((a, b) => a - b);

  return array.map(number => (number % 2 == 0 ? evenNumbers.pop() : oddNumbers.pop()));
}
