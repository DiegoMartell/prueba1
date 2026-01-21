// Ejercicio 79
// Test si un dado arreglo de enteros contains 30 y 40 twice.  El arreglo length should be 0, 1, or 2.

function twice3040(arr) {
  const contar30 = arr.filter(n => n === 30).length;
  const contar40 = arr.filter(n => n === 40).length;
  return contar30 === 2 || contar40 === 2;
}
console.log(twice3040([30, 30])); // true
console.log(twice3040([40, 40])); // true
console.log(twice3040([30]));     // false
