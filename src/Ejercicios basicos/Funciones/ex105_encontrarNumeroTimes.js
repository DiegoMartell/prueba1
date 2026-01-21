// Ejercicio 105
// Encontrar el número de times to replace un dado número with el suma de its digits until it converts to un single‑digit número.

function digitSumaIterations(num) {
  let contar = 0;
  while (num >= 10) {
    num = num.toString().split('').reduce((a, b) => a + parseInt(b, 10), 0);
    contar++;
  }
  return contar;
}
console.log(digitSumaIterations(999)); // 2 (999 -> 27 -> 9)
