function dirReduc(arr) {
  let str = arr.join(' ');
  let re = /NORTH\s+SOUTH|SOUTH\s+NORTH|WEST\s+EAST|EAST\s+WEST/;
  while (re.test(str)){
    str = str.replace(re,'');
  }
  return str.split(" ").filter(a=>!!a);
}

function dirReduc(arr) {
  let str = arr.join('');
  let re = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (re.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}