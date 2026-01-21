// Ejercicio 127
// Reverse el order de bits en an 8‑bit unsigned entero.

function invertirBits(n) {
  let bin = n.toString(2).padStart(8, '0');
  let rev = bin.split('').reverse().join('');
  return parseInt(rev, 2);
}
console.log(invertirBits(14));  // 112
console.log(invertirBits(56));  // 28
console.log(invertirBits(234)); // 87
