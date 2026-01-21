// Ejercicio 143
// Sort el cadenas de un dado arreglo de cadenas en order de increasing length.  Do not change el order when dos cadenas have el same length.

function ordenarByLongitud(arr) {
  return arr.slice().sort((a, b) => a.length - b.length);
}
console.log(ordenarByLongitud(['aaa', 'bb', 'c'])); // ['c', 'bb', 'aaa']
