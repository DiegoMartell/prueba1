// Ejercicio 135
// Eliminar all caracteres from un dado cadena that appear more than once.

function eliminarDuplicates(str) {
  const counts = {};
  for (let ch of str) counts[ch] = (counts[ch] || 0) + 1;
  let result = '';
  for (let ch of str) {
    if (counts[ch] === 1) result += ch;
  }
  return result;
}
console.log(eliminarDuplicates('abcabc')); // ''
console.log(eliminarDuplicates('abcd'));   // 'abcd'
