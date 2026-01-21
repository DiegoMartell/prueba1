// Ejercicio 116
// Encontrar all el possible options to replace el hash symbol (#) en un cadena with un digit to produce an entero divisible by 3.

function reemplazarHash(str) {
  const results = [];
  for (let d = 0; d <= 9; d++) {
    const candidate = str.replace('#', d.toString());
    if (parseInt(candidate, 10) % 3 === 0) {
      results.push(candidate);
    }
  }
  return results;
}
console.log(reemplazarHash('2#0')); // e.g. ['210','240','270']
