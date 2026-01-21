// Ejercicio 70
// Rotar el elements left en un dado arreglo de enteros de length 3.

function rotarLeft3(arr) {
  return [arr[1], arr[2], arr[0]];
}
console.log(rotarLeft3([1, 2, 3])); // [2, 3, 1]
