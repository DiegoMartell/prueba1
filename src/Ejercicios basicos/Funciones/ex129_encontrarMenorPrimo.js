// Ejercicio 129
// Encontrar el menor primo número strictly greater than un dado número.

function nextPrimo(n) {
  function isPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  let candidate = n + 1;
  while (!isPrimo(candidate)) candidate++;
  return candidate;
}
console.log(nextPrimo(24)); // 29
