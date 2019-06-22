function bouncingBall(h,  bounce,  window) {
  let count = -1;
  
  while(h > window && bounce < 1 && bounce > 0) {
    h = h * bounce;
    count += 2;
  }
  
  return count;
}