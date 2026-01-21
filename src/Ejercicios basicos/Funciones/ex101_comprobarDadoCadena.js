// Ejercicio 101
// Comprobar si un dado cadena contains only Latin letters y no dos uppercase y no dos lowercase letters son adjacent.

function isLatinNoAdjacentSameCase(str) {
  if (!/^[a-zA-Z]+$/.test(str)) return false;
  for (let i = 1; i < str.length; i++) {
    const prevMayusculas = str[i - 1] === str[i - 1].toUpperCase();
    const currMayusculas = str[i] === str[i].toUpperCase();
    if (prevMayusculas === currMayusculas) return false;
  }
  return true;
}
console.log(isLatinNoAdjacentSameCase('aBcDe')); // true
console.log(isLatinNoAdjacentSameCase('abCD'));  // false
