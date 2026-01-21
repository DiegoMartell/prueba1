// Ejercicio 60
// Crear un new cadena without el primero y último caracteres de un dado cadena.

function withoutPrimeroLast(str) {
  return str.slice(1, -1);
}
console.log(withoutPrimeroLast('Python')); // 'ytho'
