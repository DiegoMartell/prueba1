// Ejercicio 126
// Get el mayor par número from an arreglo de enteros.

function mayorEven(arr) {
  let maximoEven = null;
  for (let n of arr) {
    if (n % 2 === 0 && (maximoEven === null || n > maximoEven)) {
      maximoEven = n;
    }
  }
  return maximoEven;
}
console.log(mayorEven([1, 2, 3, 10, 4, 7])); // 10
