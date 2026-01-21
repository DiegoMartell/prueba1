// Ejercicio 147
// Calcular el suma de all el digits that occur en un dado cadena.

function sumaDigitsInCadena(str) {
  return str.split('').reduce((sum, ch) => sum + (/\d/.test(ch) ? parseInt(ch, 10) : 0), 0);
}
console.log(sumaDigitsInCadena('abc123')); // 6
