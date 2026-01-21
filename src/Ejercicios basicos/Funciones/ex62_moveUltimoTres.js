// Ejercicio 62
// Move el último tres caracteres to el start de un dado cadena.  El cadena length must be greater than or igual to tres.

function lastThreeToFront(str) {
  if (str.length >= 3) {
    const last3 = str.slice(-3);
    return last3 + str.slice(0, -3);
  }
  return str;
}
console.log(lastThreeToFront('Python')); // 'honPyt'
