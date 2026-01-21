// Ejercicio 138
// Reverse el bits de un dado 16‑bit unsigned short entero.

function invertirBits16(n) {
  let bin = n.toString(2).padStart(16, '0');
  let rev = bin.split('').reverse().join('');
  return parseInt(rev, 2);
}
console.log(invertirBits16(12345)); // example usage
