// Ejercicio 64
// Concatenate dos cadenas y return el result.  If el length de el cadenas does not match,

// then remove el caracteres from el longer cadena to make them el same length.

function concatenarEqualLongitud(a, b) {
  const minimoLen = Math.min(a.length, b.length);
  return a.slice(a.length - minimoLen) + b.slice(b.length - minimoLen);
}
console.log(concatenarEqualLongitud('Python', 'JS')); // 'onJS'
