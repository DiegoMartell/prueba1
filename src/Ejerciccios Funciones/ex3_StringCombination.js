function stringCombos(str) {
  let combos = [];
  for (let i = 0; i < str.length; i++){
    for (let j = i + 1; j <= str.length; j++){
      combos.push(str.slice(i, j));
    }
  }
  return combos;
}

console.log(stringCombos("dog")); // ["d","do","dog","o","og","g"]
