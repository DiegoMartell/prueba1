// Ejercicio 119
// Comprobar if un dado entero has an increasing digit sequence.

function isDigitsIncreasing(num) {
  const s = num.toString();
  for (let i = 1; i < s.length; i++) {
    if (parseInt(s[i], 10) <= parseInt(s[i - 1], 10)) return false;
  }
  return true;
}
console.log(isDigitsIncreasing(1234)); // true
console.log(isDigitsIncreasing(1223)); // false
