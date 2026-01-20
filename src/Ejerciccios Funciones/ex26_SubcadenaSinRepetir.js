// Subcadena más larga sin caracteres repetidos
function masLargaSinRepetir(str) {
  let inicio = 0, mapa = {}, maxStr = "";
  for (let i = 0; i < str.length; i++) {
    if (mapa[str[i]] >= inicio) {
      inicio = mapa[str[i]] + 1;
    }
    mapa[str[i]] = i;
    let sub = str.slice(inicio, i + 1);
    if (sub.length > maxStr.length) maxStr = sub;
  }
  return maxStr;
}
console.log(masLargaSinRepetir("abcabcbb"));
