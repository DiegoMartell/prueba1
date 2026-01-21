// Ejercicio 42
// Comprobar si tres dado números son increasing en strict mode (x < y < z)

// or en soft mode (y >= x y z > y).

function isIncreasing(x, y, z, strict) {
  if (strict) {
    return z > y && y > x;
  }
  return z > y && y >= x;
}
console.log(isIncreasing(10, 15, 31, true));  // true
console.log(isIncreasing(24, 22, 31, false)); // true
