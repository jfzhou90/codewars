//first attempt
function DNAStrand(dna){
  let pair = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C'
  };
  
  return dna.split('').map(half => pair[half]).join('');
}


let pairs = {A:'T',T:'A',C:'G',G:'C'};
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);