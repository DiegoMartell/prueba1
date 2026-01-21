// Ejercicio 109
// Sort an arreglo de all primo números entre 1 y un dado entero n.

function primesUpTo(n) {
  const primes = [];
  for (let num = 2; num <= n; num++) {
    let isPrimo = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrimo = false;
        break;
      }
    }
    if (isPrimo) primes.push(num);
  }
  return primes;
}
console.log(primesUpTo(10)); // [2, 3, 5, 7]
