// Ejercicio 128
// Encontrar el menor round número not less than un dado value.  Un round número ends with one or more zeros.

function nextRoundNumero(n) {
  return Math.ceil(n / 10) * 10;
}
console.log(nextRoundNumero(590)); // 590
console.log(nextRoundNumero(592)); // 600
