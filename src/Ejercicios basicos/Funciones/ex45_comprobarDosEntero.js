// Ejercicio 45
// Comprobar dos entero values y return true if either one es 15 or if their suma or diferencia es 15.

function comprobar15(x, y) {
  return x === 15 || y === 15 || x + y === 15 || Math.abs(x - y) === 15;
}
console.log(comprobar15(7, 8)); // true
console.log(comprobar15(23, 8)); // false
