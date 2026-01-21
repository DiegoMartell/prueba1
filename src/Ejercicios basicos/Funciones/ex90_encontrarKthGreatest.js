// Ejercicio 90
// Encontrar el k^{th} greatest element en un dado arreglo de enteros.

function kthGreatest(arr, k) {
  const sorted = arr.slice().sort((a, b) => b - a);
  return sorted[k - 1];
}
console.log(kthGreatest([1, 2, 3, 4, 5], 2)); // 4
