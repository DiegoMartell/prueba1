// Ejercicio 95
// Reemplazar all números en un dado arreglo de enteros with un specified número.

function reemplazarNumeros(arr, reemplazarWith) {
  return arr.map(() => reemplazarWith);
}
console.log(reemplazarNumeros([1, 2, 3], 0)); // [0, 0, 0]
