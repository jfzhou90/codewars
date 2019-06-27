//first tru
function encode(input) {
  let encoded = '';
  let currentChar;
  let count = 0;
  input.split('').forEach((char, index) => {
    if(char !== currentChar) {
      currentChar = char
      count = 1;
    } else {
      count++
    }
    
    if(char !== input[index+1]) {
      encoded += count+currentChar;
    }
  })
  return encoded;
}

function decode(input) {
  let decoded = '';
  input.match(/(\d+\D)/g).forEach(pair => {
    decoded += pair[pair.length-1].repeat(pair.match(/\d+/)[0]);
  })
  
  return decoded;
}


//not mine.
function encode(input) {
  return input.replace(/(.)\1*/g, (match, p1) => match.length + p1);
}

function decode(input) {
  return input.replace(/(\d+)(.)+?/g, (_, p1, p2) => p2.repeat(p1));
}