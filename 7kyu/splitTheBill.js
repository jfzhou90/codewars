//first attempt
function splitTheBill(x) {
  let sum = 0
  for(let i in x) {
    sum += x[i]
  };

  let avg = sum / Object.keys(x).length;

  for(let i in x) {
    x[i] = Math.round(100* (x[i]-avg)) / 100;
  }
  return x
}

// refactored
const splitTheBill = x => {
  let vals = Object.values(x),
      avg  = vals.reduce((s, v) => s + v) / vals.length;
  return Object.keys(x).reduce((y, v) => (y[v] = +(x[v] - avg).toFixed(2), y), {});
}