// Extrae caracteres únicos de una cadena
function extraerUnicos(str) {
  let resultado = "";
  for (let char of str) {
    if (!resultado.includes(char)) {
      resultado += char;
    }
  }
  return resultado;
}
console.log(extraerUnicos("thequickbrownfoxjumpsoverthelazydog"));
