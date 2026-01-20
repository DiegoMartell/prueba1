// Longest palindromic substring
function palindromoMasLargo(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let sub = str.slice(i, j);
      if (sub === sub.split("").reverse().join("") && sub.length > result.length) {
        result = sub;
      }
    }
  }
  return result;
}
console.log(palindromoMasLargo("bananas"));
