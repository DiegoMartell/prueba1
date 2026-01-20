// Primer caracter que no se repite en una cadena
function primerNoRepetido(str) {
  let mapa = {};
  for (let ch of str) {
    mapa[ch] = (mapa[ch] || 0) + 1;
  }
  for (let ch of str) {
    if (mapa[ch] === 1) return ch;
  }
  return null;
}
console.log(primerNoRepetido("abacddbec")); // 'e'
