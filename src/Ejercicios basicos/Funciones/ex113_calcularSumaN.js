// Ejercicio 113
// Calcular el suma de n + n/2 + n/4 + n/8 + ... where n es un positivo entero y all divisions son enteros.

function sumaSeries(n) {
  let total = 0;
  while (n > 0) {
    total += n;
    n = Math.floor(n / 2);
  }
  return total;
}
console.log(sumaSeries(8)); // 15 (8 + 4 + 2 + 1)
