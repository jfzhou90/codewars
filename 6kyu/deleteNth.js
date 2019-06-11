// first attempt
function deleteNth(arr,n){
  let count = {};
  let newArray = [];
  arr.forEach(element => {
    if(!count[element]) count[element] = 0;
    
    if(count[element] < n) {
      count[element] = count[element] + 1;
      newArray.push(element);
    }
  });
  return newArray;
}

//refactored
function deleteNth(arr,n){
  let count = {};
  return arr.filter(element => {
    count[element] = (count[element] || 0) + 1;
    return count[element] <= n
  })
}