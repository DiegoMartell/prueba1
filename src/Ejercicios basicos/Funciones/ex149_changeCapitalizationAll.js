// Ejercicio 149
// Change el capitalization de all letters en un dado cadena.

function swapCase(str) {
  let result = '';
  for (let ch of str) {
    if (ch === ch.toUpperCase()) result += ch.toLowerCase();
    else result += ch.toUpperCase();
  }
  return result;
}
console.log(swapCase('Hello World')); // 'hELLO wORLD'
