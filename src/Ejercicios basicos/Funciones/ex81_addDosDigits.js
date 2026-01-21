// Ejercicio 81
// Add dos digits to un dado positivo entero de length dos.

function sumaDigits(num) {
  const digits = num.toString().split('').map(Number);
  return digits.reduce((a, b) => a + b, 0);
}
console.log(sumaDigits(25)); // 7
