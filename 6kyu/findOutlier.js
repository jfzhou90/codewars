function findOutlier(integers){
  let even = integers.filter(integer => integer % 2 == 0);
  if(even.length == 1) return even[0];
  
  return integers.filter(integer => integer % 2 != 0)[0]
}