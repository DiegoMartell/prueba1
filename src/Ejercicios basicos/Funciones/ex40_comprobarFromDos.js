// Ejercicio 40
// Comprobar from dos dado enteros si one es 8 or their suma or diferencia es 8.

function comprobar8(x, y) {
  return x === 8 || y === 8 || x + y === 8 || Math.abs(x - y) === 8;
}
console.log(comprobar8(8, 0)); // true
console.log(comprobar8(7, 1)); // true
