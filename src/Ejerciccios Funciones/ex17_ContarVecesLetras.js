// Cuenta cuántas veces aparece cada letra en una cadena
function contarOcurrencias(str) {
  let mapa = {};
  for (let char of str) {
    mapa[char] = (mapa[char] || 0) + 1;
  }
  return mapa;
}
console.log(contarOcurrencias("holamundo "));
