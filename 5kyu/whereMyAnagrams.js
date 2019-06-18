function anagrams(word, words) {
  return words.filter(anagram => word.split('').sort().join('') == anagram.split('').sort().join(''));
}