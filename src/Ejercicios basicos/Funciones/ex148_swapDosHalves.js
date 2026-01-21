// Ejercicio 148
// Swap dos halves de un dado arreglo de enteros de par length.

function swapHalves(arr) {
  const mid = arr.length / 2;
  const primero = arr.slice(0, mid);
  const segundo = arr.slice(mid);
  return segundo.concat(primero);
}
console.log(swapHalves([1, 2, 3, 4])); // [3, 4, 1, 2]
