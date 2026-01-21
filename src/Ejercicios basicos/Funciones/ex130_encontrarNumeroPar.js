// Ejercicio 130
// Encontrar el número de par digits en un dado entero.

function contarEvenDigits(num) {
  return num.toString().split('').filter(d => parseInt(d, 10) % 2 === 0).length;
}
console.log(contarEvenDigits(123456)); // 3
