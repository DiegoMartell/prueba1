// Ejercicio 93
// Encontrar el maximum diferencia among all pairs de un dado arreglo de enteros.

function maximoDiferencia(arr) {
  let maximo = -Infinity;
  let minimo = Infinity;
  for (let num of arr) {
    if (num > maximo) maximo = num;
    if (num < minimo) minimo = num;
  }
  return maximo - minimo;
}
console.log(maximoDiferencia([1, 2, 3, 8, 9])); // 8
