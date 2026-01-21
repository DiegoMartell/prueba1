// Ejercicio 107
// Encontrar el número de sorted pairs formed by arrays de enteros such that one element en el pair es divisible by el other one.

function contarDivisiblePairs(arr) {
  let contar = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] % arr[i] === 0) contar++;
    }
  }
  return contar;
}
console.log(contarDivisiblePairs([1, 3, 2])); // 2
console.log(contarDivisiblePairs([2, 4, 6])); // 2
console.log(contarDivisiblePairs([2, 4, 16])); // 3
