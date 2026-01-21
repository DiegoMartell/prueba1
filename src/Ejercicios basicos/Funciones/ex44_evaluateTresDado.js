// Ejercicio 44
// Evaluate tres dado enteros y determine if any one de them es greater than or igual

// to 20 y less than at least one de el other dos.

function val20(x, y, z) {
  return (x >= 20 && (x < y || x < z)) ||
         (y >= 20 && (y < x || y < z)) ||
         (z >= 20 && (z < x || z < y));
}
console.log(val20(23, 45, 10)); // true
console.log(val20(23, 23, 10)); // false
