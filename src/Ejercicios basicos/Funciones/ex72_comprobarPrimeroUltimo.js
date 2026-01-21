// Ejercicio 72
// Comprobar si el primero y último elements son el same en un dado arreglo de enteros de length 3.

function samePrimeroLast(arr) {
  return arr[0] === arr[arr.length - 1];
}
console.log(samePrimeroLast([1, 2, 3])); // false
console.log(samePrimeroLast([1, 2, 1])); // true
