function bouncingBall(h,  bounce,  window) {
  let count = -1;
  
  while(h > window) {
    h = h * bounce;
    count += 2;
  }
  
  return count;
}