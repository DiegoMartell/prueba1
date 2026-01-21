// Ejercicio 97
// Encontrar el más corto possible cadena that can be converted into un palíndromo by adding caracteres to el end de it.

function buildPalindrome(str) {
  function isPalindrome(s) {
    return s === s.split('').reverse().join('');
  }
  for (let i = 0; i < str.length; i++) {
    const sufijo = str.slice(i);
    if (isPalindrome(sufijo)) {
      const agregar = str.slice(0, i).split('').reverse().join('');
      return str + agregar;
    }
  }
  return str;
}
console.log(buildPalindrome('abc')); // 'abcba'
