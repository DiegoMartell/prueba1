// Ejercicio 118
// Comprobar si un dado número es en un dado range [start, end].

function isInRango(n, start, end) {
  return n >= start && n <= end;
}
console.log(isInRango(5, 1, 10)); // true
console.log(isInRango(20, 1, 10)); // false
