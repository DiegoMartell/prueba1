// Ejercicio 54
// Contar el número de vocales en un dado cadena.

function contarVowels(str) {
  const match = str.match(/[aeiou]/gi);
  return match ? match.length : 0;
}
console.log(contarVowels('The quick brown fox')); // 5
