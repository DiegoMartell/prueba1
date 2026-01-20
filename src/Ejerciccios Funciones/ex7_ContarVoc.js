function countVowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(countVowels("The quick brown fox")); // 5
