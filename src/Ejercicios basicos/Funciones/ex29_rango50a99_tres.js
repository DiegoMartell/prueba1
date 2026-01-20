// Verifica si alguno de tres números está en rango 50–99

function rangoTres(a, b, c) {
  return [a, b, c].some(n => n >= 50 && n <= 99);
}

console.log(rangoTres(10, 60, 30));
