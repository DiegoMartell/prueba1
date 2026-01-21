// Ejercicio 111
// Comprobar un número from tres dado números where dos números son igual.  Encontrar el third one (el unique número).

function uniqueNumero(a, b, c) {
  if (a === b) return c;
  if (a === c) return b;
  return a;
}
console.log(uniqueNumero(3, 3, 2)); // 2
