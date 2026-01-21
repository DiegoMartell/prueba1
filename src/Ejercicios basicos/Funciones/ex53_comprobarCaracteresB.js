// Ejercicio 53
// Comprobar si el caracteres 'un' y 'b' son separated by exactly 3 places anywhere en un dado cadena.

function ab_comprobar(str) {
  return /a...b/.test(str) || /b...a/.test(str);
}
console.log(ab_comprobar('Chainsbreak')); // true
console.log(ab_comprobar('pane borrowed')); // false
