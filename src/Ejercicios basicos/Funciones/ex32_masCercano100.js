// Devuelve el número más cercano a 100

function masCercano(a, b) {
  return Math.abs(100 - a) < Math.abs(100 - b) ? a : b;
}

console.log(masCercano(90, 120));
