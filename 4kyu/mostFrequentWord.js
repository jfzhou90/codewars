function topThreeWords(text) {
  let cleanText = text.toLowerCase().match(/[a-zA-z]\S*\w+|\w+/g);
  if(!cleanText) return [];
  
  let countObj = {};
  
  let unique = [...new Set(cleanText)];
  unique.forEach(word => {
    let count = cleanText.filter(e => e == word).length;
    countObj[count] = countObj[count] || [];
    if(!countObj[count].includes(word)){
      countObj[count].push(word);
    }
  })
  
  let keys = Object.keys(countObj).sort();
  let resultsCount = keys.length < 3 ? keys.length : 3;
  let results = [];
  for(let i = 0; i < resultsCount; i++){
    results = results.concat(countObj[keys.pop()]);
  }
  
  return results.slice(0,3);
}

// not mine, this was listed as one of the solutions.
function topThreeWords(text) {
  let words = {}
  text.toLowerCase().replace(/([A-Za-z][A-Za-z']*)/g, match => {
    let c = words[match] || 0
    words[match] = ++c
  })
  return Object
          .keys(words)
          .sort(function(a,b){return words[b]-words[a]})
          .slice(0,3)
}