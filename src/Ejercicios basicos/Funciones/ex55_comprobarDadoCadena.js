// Ejercicio 55
// Comprobar si un dado cadena contains an igual número de 'p' y 't'.

function equal_pt(str) {
  const pContar = (str.match(/p/gi) || []).length;
  const tContar = (str.match(/t/gi) || []).length;
  return pContar === tContar;
}
console.log(equal_pt('PaTpTp')); // true
console.log(equal_pt('pppptttttt')); // false
