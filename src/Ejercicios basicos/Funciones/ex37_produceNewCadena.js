// Ejercicio 37
// Produce un new cadena that has el primero 3 caracteres en lower case from un

// dado cadena.  If el cadena length es less than 3, convertir all el caracteres

// to upper case.

function minusculasMayusculas(str) {
  return str.length < 3 ? str.toUpperCase() : str.slice(0, 3).toLowerCase() + str.slice(3);
}
console.log(minusculasMayusculas('PYTHON')); // 'pytHON'
console.log(minusculasMayusculas('JS'));     // 'JS'
