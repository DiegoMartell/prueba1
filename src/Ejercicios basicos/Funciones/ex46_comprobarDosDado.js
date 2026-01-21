// Ejercicio 46
// Comprobar dos dado non‑negative enteros if one (not both) es un múltiplo de 7 or 11.

function multiple7Or11(x, y) {
  const xmult = (x % 7 === 0 || x % 11 === 0);
  const ymult = (y % 7 === 0 || y % 11 === 0);
  return (xmult && !ymult) || (!xmult && ymult);
}
console.log(multiple7Or11(14, 21)); // false
console.log(multiple7Or11(14, 20)); // true
