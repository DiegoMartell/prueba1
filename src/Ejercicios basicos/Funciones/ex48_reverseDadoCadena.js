// Ejercicio 48
// Reverse un dado cadena.

function invertirCadena(str) {
  return str.split('').reverse().join('');
}
console.log(invertirCadena('w3resource')); // 'ecruoser3w'
