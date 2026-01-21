// Ejercicio 98
// Change el case de el minimum número de letters to make un dado cadena all upper case or all lower case.

function minimoCaseChange(str) {
  const mayusculasContar = (str.match(/[A-Z]/g) || []).length;
  const minusculasContar = (str.match(/[a-z]/g) || []).length;
  return minusculasContar > mayusculasContar ? str.toLowerCase() : str.toUpperCase();
}
console.log(minimoCaseChange('Write')); // 'write'
console.log(minimoCaseChange('PHp'));   // 'PHP'
