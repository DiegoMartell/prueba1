// Ejercicio 134
// Change el caracteres (lower case) en un cadena where un turns into z, b turns into y, c turns into x, ..., z turns into un.

function atbash(str) {
  const alph = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let ch of str) {
    const indice = alph.indexOf(ch);
    if (indice >= 0) {
      result += alph[25 - indice];
    } else {
      result += ch;
    }
  }
  return result;
}
console.log(atbash('abcxyz')); // 'zyxcba'
