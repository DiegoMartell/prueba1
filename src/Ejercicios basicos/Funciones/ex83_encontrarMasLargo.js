// Ejercicio 83
// Encontrar el más largo cadena from un dado arreglo de cadenas.

function longestCadena(arr) {
  return arr.reduce((a, b) => a.length >= b.length ? a : b);
}
console.log(longestCadena(['a', 'ab', 'abc'])); // 'abc'
