// Ejercicio 43
// Comprobar from tres dado números (non negativo enteros) that dos or all de them have el same rightmost digit.

function comprobarLastDigit(a, b, c) {
  const x = a % 10;
  const y = b % 10;
  const z = c % 10;
  return x === y || y === z || x === z;
}
console.log(comprobarLastDigit(123, 256, 533)); // true
