// Ejercicio 136
// Reemplazar el primero digit en un cadena (should have at least one digit) with el $ carácter.

function reemplazarPrimeroDigit(str) {
  return str.replace(/\d/, '$');
}
console.log(reemplazarPrimeroDigit('abc123')); // 'abc$23'
