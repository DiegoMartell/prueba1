// Ejercicio 78
// Test si an arreglo de enteros de length 2 does not contain 1 or 3.

function no13(arr) {
  return !arr.includes(1) && !arr.includes(3);
}
console.log(no13([1, 5])); // false
console.log(no13([2, 5])); // true
