// Ejercicio 65
// Test si un cadena ends with "Script".  El cadena length must be greater than or igual to 6.

function endsWithScript(str) {
  return str.length >= 6 && str.slice(-6) === 'Script';
}
console.log(endsWithScript('JavaScript')); // true
console.log(endsWithScript('Coffee'));     // false
