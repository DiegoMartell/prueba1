// Ejercicio 80
// Swap el primero y último elements de un dado arreglo de enteros.  El arreglo length should be at least 1.

function swapPrimeroLastArreglo(arr) {
  if (arr.length >= 1) {
    const temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
  }
  return arr;
}
console.log(swapPrimeroLastArreglo([1, 2, 3])); // [3, 2, 1]
