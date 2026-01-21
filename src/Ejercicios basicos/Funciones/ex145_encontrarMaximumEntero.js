// Ejercicio 145
// Encontrar el maximum entero n such that 1 + 2 + ... + n <= un dado entero m.

function maximoN(m) {
  return Math.floor((Math.sqrt(8 * m + 1) - 1) / 2);
}
console.log(maximoN(10)); // 4 (1+2+3+4 = 10)
