// Ejercicio 59
// Extract el primero half de an even‑length cadena.

function primeroHalf(str) {
  return str.slice(0, str.length / 2);
}
console.log(primeroHalf('Python')); // 'Pyt'
