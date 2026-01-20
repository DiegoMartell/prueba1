// Cuenta cuántas veces aparece una letra específica
function contarLetra(str, letra) {
  let count = 0;
  for (let ch of str) if (ch === letra) count++;
  return count;
}
console.log(contarLetra("w3resource.com" , "o")); // 2
