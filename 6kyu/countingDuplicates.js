function duplicateCount(text){
  let duplicates = 0;
  let tempObj = {};
  text.toLowerCase().split('').forEach(char => {
    tempObj[char] = tempObj[char] +1 || 1;
  });
  
  Object.keys(tempObj).forEach(key => {
    if(tempObj[key] > 1) {
      duplicates++;
    }
  });
  
  return duplicates;
}