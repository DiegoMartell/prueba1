// Ejercicio 52
// Convertir el letters de un dado cadena alfabéticamente.

function ordenarLetters(str) {
  return str.split('').sort().join('');
}
console.log(ordenarLetters('python')); // 'hnopty'
