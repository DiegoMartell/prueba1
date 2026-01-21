// Ejercicio 92
// Encontrar el maximum diferencia entre any dos adjacent elements de un dado arreglo de enteros.

function maximoAdjacentDiff(arr) {
  let maximoDiff = 0;
  for (let i = 1; i < arr.length; i++) {
    const diff = Math.abs(arr[i] - arr[i - 1]);
    if (diff > maximoDiff) maximoDiff = diff;
  }
  return maximoDiff;
}
console.log(maximoAdjacentDiff([1, 2, 3, 8, 9])); // 5
