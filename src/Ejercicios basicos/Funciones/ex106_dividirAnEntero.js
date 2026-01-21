// Ejercicio 106
// Dividir an entero by another entero as long as el result es an entero y return el result.

function dividirUntilNotInt(a, b) {
  while (a % b === 0) {
    a /= b;
  }
  return a;
}
console.log(dividirUntilNotInt(100, 2)); // 25
