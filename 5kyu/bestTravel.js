function chooseBestSum(maxDistance, count, townsDistance) {
  if(townsDistance.length < count || townsDistance.length < 1) return null;
  let subsets = subArrays(townsDistance).filter(sub => sub.length == count);
  let closestSum = null;
  subsets.forEach(subset => {
    let temp = subset.reduce((a,b) => a+b);
    if(temp > closestSum && temp <= maxDistance){
      closestSum = temp;
    }
  });
  
  return closestSum;
}

function subArrays(arr){
  if (arr.length === 1) return [arr];
  let subarr = subArrays(arr.slice(1));
  return subarr.concat(subarr.map(e => e.concat(arr[0])), [[arr[0]]]);
}

