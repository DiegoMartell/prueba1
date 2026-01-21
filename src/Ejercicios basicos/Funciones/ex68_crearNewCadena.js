// Ejercicio 68
// Crear un new cadena using el primero y último n caracteres from un dado cadena.  El cadena length must be larger than or igual to n.

function twoEnds(str, n) {
  return str.slice(0, n) + str.slice(-n);
}
console.log(twoEnds('Python', 2)); // 'Pyon'
