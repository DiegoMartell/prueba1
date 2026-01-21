// Ejercicio 146
// Calcular el suma de cubes de all enteros from 1 to un dado entero.

function sumaCubes(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i ** 3;
  }
  return suma;
}
console.log(sumaCubes(3)); // 36 (1^3+2^3+3^3)
