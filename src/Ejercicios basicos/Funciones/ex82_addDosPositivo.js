// Ejercicio 82
// Add dos positivo enteros without carrying.

function agregarWithoutCarrying(a, b) {
  let result = 0;
  let multiplier = 1;
  while (a > 0 || b > 0) {
    const suma = (a % 10 + b % 10) % 10;
    result += suma * multiplier;
    a = Math.floor(a / 10);
    b = Math.floor(b / 10);
    multiplier *= 10;
  }
  return result;
}
console.log(agregarWithoutCarrying(456, 173)); // 529
