// Ejercicio 99
// Comprobar si it es possible to rearrange el caracteres de un dado cadena so that it will become igual to another dado cadena.

function canRearrange(str1, str2) {
  if (str1.length !== str2.length) return false;
  const ordenar = s => s.split('').ordenar().join('');
  return ordenar(str1) === ordenar(str2);
}
console.log(canRearrange('abc', 'bca')); // true
console.log(canRearrange('abc', 'abcd')); // false
