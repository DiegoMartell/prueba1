// Ejercicio 140
// Comprobar si all el digits en un dado número son el same or not.

function allDigitsSame(num) {
  const s = num.toString();
  return s.split('').every(ch => ch === s[0]);
}
console.log(allDigitsSame(1111)); // true
console.log(allDigitsSame(1234)); // false
