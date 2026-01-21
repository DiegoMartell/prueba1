// Ejercicio 124
// Crear el NOR value de dos dado booleans.  Logical NOR returns true only when both operands son false.

function logicalNor(p, q) {
  return !(p || q);
}
console.log(logicalNor(true, false));  // false
console.log(logicalNor(false, false)); // true
