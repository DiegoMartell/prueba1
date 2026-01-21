// Ejercicio 57
// Crear one cadena de specified copies (positivo números) de un dado cadena.

function copies(str, n) {
  return n > 0 ? str.repeat(n) : '';
}
console.log(copies('abc', 3)); // 'abcabcabc'
