function longestWord(str) {
  return str.split(' ').reduce((max, word) => word.length > max.length ? word : max, "");
}

console.log(longestWord("Web Development Tutorial"));
// "Development"
