// Ejercicio 77
// Test si an arreglo de enteros de length 2 contains 1 or 3.

function has13(arr) {
  return arr.includes(1) || arr.includes(3);
}
console.log(has13([1, 5])); // true
console.log(has13([2, 5])); // false
