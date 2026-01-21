// Ejercicio 96
// Calcular el suma de el absolute differences de consecutive números en un dado arreglo de enteros.

function sumaAbsDiff(arr) {
  let suma = 0;
  for (let i = 1; i < arr.length; i++) {
    suma += Math.abs(arr[i] - arr[i - 1]);
  }
  return suma;
}
console.log(sumaAbsDiff([1, 2, 3, 2, -5])); // 12
