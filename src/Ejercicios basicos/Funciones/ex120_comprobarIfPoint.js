// Ejercicio 120
// Comprobar if un point lies strictly inside un circle defined by its center y radius.

function isInsideCirculo(centerX, centerY, radio, x, y) {
  const dx = x - centerX;
  const dy = y - centerY;
  return dx * dx + dy * dy < radio * radio;
}
console.log(isInsideCirculo(0, 0, 5, 1, 1)); // true
console.log(isInsideCirculo(0, 0, 5, 5, 0)); // false (on the boundary)
