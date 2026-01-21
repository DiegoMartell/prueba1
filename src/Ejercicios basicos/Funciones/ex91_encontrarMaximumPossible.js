// Ejercicio 91
// Encontrar el maximum possible suma de k consecutive números en un dado arreglo de positivo enteros.

function maximoConsecutiveSuma(arr, k) {
  let maximo = 0;
  for (let i = 0; i <= arr.length - k; i++) {
    const suma = arr.slice(i, i + k).reduce((a, b) => a + b, 0);
    if (suma > maximo) maximo = suma;
  }
  return maximo;
}
console.log(maximoConsecutiveSuma([1, 2, 3, 4, 5, 6], 3)); // 15
