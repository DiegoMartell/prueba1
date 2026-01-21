// Ejercicio 50
// Capitalizar el primero letter de each word en un dado cadena.

function capitalizarWords(str) {
  return str.split(' ').map(function (w) {
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}
console.log(capitalizarWords('the quick brown fox')); // 'The Quick Brown Fox'
