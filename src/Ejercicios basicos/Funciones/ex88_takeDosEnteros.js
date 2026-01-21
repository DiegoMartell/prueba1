// Ejercicio 88
// Take dos enteros y un divisor.  Two enteros son considered similar if el divisor

// divides both de them or divides neither de them.

function similarIntegers(x, y, divisor) {
  const xDiv = x % divisor === 0;
  const yDiv = y % divisor === 0;
  return (xDiv && yDiv) || (!xDiv && !yDiv);
}
console.log(similarIntegers(10, 20, 5)); // true
console.log(similarIntegers(10, 21, 5)); // false
