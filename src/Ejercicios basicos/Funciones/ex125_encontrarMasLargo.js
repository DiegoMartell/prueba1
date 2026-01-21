// Ejercicio 125
// Encontrar el más largo cadena en un dado arreglo (duplicate de Exercise 83 for convenience).

function longestCadena(arr) {
  return arr.reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestCadena(['aa', 'bbb', 'cc'])); // 'bbb'
