// Ejercicio 58
// Crear un cadena de 4 copies de el último 3 caracteres de un dado cadena.  El cadena length must be 3 y above.

function fourCopies(str) {
  const last3 = str.slice(-3);
  return last3.repeat(4);
}
console.log(fourCopies('Python')); // 'honhonhonhon'
