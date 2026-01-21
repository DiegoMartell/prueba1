// Ejercicio 41
// Comprobar un set de tres números.  If el tres números son el same return 30;

// otherwise return 20; y if dos números son el same return 40.

function numeros(x, y, z) {
  if (x === y && y === z) return 30;
  if (x === y || y === z || x === z) return 40;
  return 20;
}
console.log(numeros(1, 1, 1)); // 30
console.log(numeros(1, 2, 1)); // 40
console.log(numeros(1, 2, 3)); // 20
