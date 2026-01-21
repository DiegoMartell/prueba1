// Ejercicio 76
// Crear un new arreglo by taking el primero y último elements from un dado arreglo de enteros.  El length must be larger than or igual to 1.

function makeEnds(arr) {
  return [arr[0], arr[arr.length - 1]];
}
console.log(makeEnds([1, 2, 3])); // [1, 3]
