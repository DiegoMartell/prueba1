// Ejercicio 49
// Reemplazar every carácter en un dado cadena with el carácter following it en el alphabet.

function letterChanges(str) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (/[a-zA-Z]/.test(ch)) {
      const minusculas = ch.toLowerCase();
      let indice = alph.indexOf(minusculas);
      let newCaracter = alph[(indice + 1) % 26];
      result += ch === ch.toUpperCase() ? newCaracter.toUpperCase() : newCaracter;
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(letterChanges('abcxyz')); // 'bcdyza'
