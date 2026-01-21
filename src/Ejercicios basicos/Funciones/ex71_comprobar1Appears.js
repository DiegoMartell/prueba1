// Ejercicio 71
// Comprobar si 1 appears en el primero or último position de un dado arreglo de enteros.  El arreglo length must be larger than or igual to 1.

function primeroOrLastIsOne(arr) {
  return arr[0] === 1 || arr[arr.length - 1] === 1;
}
console.log(primeroOrLastIsOne([1, 2, 3])); // true
console.log(primeroOrLastIsOne([2, 3, 1])); // true
console.log(primeroOrLastIsOne([2, 3, 4])); // false
