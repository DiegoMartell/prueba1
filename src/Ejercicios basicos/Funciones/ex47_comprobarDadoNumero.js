// Ejercicio 47
// Comprobar si un dado número contains el substring "40" (for example 40 presents en 40 y 4000).

function contains40(n) {
  return n.toString().includes('40');
}
console.log(contains40(40));   // true
console.log(contains40(4000)); // true
console.log(contains40(123));  // false
