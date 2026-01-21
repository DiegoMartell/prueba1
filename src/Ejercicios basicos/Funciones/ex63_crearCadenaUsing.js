// Ejercicio 63
// Crear un cadena using el medio tres caracteres de un dado cadena de impar length.  El cadena length must be greater than or igual to tres.

function middleThree(str) {
  const mid = Math.floor(str.length / 2);
  return str.slice(mid - 1, mid + 2);
}
console.log(middleThree('abcdefg')); // 'def'
