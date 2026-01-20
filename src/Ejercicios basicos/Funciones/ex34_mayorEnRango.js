// Devuelve el mayor si ambos están entre 40 y 60

function mayor4060(a, b) {
  if (a >= 40 && a <= 60 && b >= 40 && b <= 60) {
    return Math.max(a, b);
  }
  return null;
}

console.log(mayor4060(50, 55));
