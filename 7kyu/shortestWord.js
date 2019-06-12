function findShort(s){
  return Math.min.apply(null, s.split(' ').map(word => word.length));
}

function findShort(s){
  return Math.min(...s.split(' ').map(word => word.length));
}