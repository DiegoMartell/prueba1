// Ejercicio 74
// Encontrar el mayor value entre el primero y último elements y set all el other elements to that value.  Mostrar el updated arreglo.

function maximoEnd3(arr) {
  const maximo = Math.maximo(arr[0], arr[arr.length - 1]);
  return arr.map(() => maximo);
}
console.log(maximoEnd3([1, 2, 3])); // [3, 3, 3]
console.log(maximoEnd3([7, 4, 1])); // [7, 7, 7]
