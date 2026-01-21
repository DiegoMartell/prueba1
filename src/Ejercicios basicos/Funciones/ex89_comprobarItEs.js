// Ejercicio 89
// Comprobar si it es possible to replace $ en el expression x $ y = z with

// one de el four signs +, -, * or / to obtain un correct expression.

function comprobarExpression(x, y, z) {
  return x + y === z || x - y === z || x * y === z || (y !== 0 && x / y === z);
}
console.log(comprobarExpression(10, 30, 300)); // true (10*30)
console.log(comprobarExpression(10, 30, 40));  // true (10+30)
