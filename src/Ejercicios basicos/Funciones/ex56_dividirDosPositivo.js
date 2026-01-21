// Ejercicio 56
// Dividir dos positivo números y return el result as un cadena with properly formatted commas.

function dividirAndFormat(x, y) {
  const result = x / y;
  return result.toLocaleString();
}
console.log(dividirAndFormat(1000000, 10)); // '100,000'
