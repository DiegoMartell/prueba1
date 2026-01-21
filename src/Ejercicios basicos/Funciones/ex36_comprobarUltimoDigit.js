// Comprobar si el último digit de tres positivo enteros es el same.

function lastDigitSame(x, y, z) {
  return x % 10 === y % 10 && y % 10 === z % 10;
}

console.log(lastDigitSame(123, 453, 783)); // true
