// Ejercicio 133
// Comprobar si un dado fraction es proper.  Un fraction (numer/denom) es proper

// if el numerator y el denominator son both positivo y el numerator es less than el denominator.

function isProperFraction(numer, denom) {
  return numer > 0 && denom > 0 && numer < denom;
}
console.log(isProperFraction(3, 5)); // true
console.log(isProperFraction(5, 3)); // false
