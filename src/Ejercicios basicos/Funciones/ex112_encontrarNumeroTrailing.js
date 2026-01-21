// Ejercicio 112
// Encontrar el número de trailing zeros en el decimal representation de el factorial de un dado número.

function trailingZeros(n) {
  let contar = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    contar += Math.floor(n / i);
  }
  return contar;
}
console.log(trailingZeros(10)); // 2 (10! = 3628800)
