// Ejercicio 61
// Concatenate dos cadenas except their primero carácter.

function concatenarWithoutPrimero(a, b) {
  return a.slice(1) + b.slice(1);
}
console.log(concatenarWithoutPrimero('Python', 'JS')); // 'ythonS'
