// Ejercicio 103
// Encontrar el maximum número de un dado positivo entero by deleting exactly one digit de el dado número.

function maximoByDeleteDigit(num) {
  const s = num.toString();
  let maximo = 0;
  for (let i = 0; i < s.length; i++) {
    const candidate = parseInt(s.slice(0, i) + s.slice(i + 1), 10);
    if (candidate > maximo) maximo = candidate;
  }
  return maximo;
}
console.log(maximoByDeleteDigit(100)); // 10
console.log(maximoByDeleteDigit(10));  // 1
