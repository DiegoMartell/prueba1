// Ejercicio 139
// Encontrar el position de el rightmost round número en an arreglo de enteros.

// If there son no round números, return 0.  Un round número ends with one or more zeros.

function rightmostRound(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 === 0) return i + 1;
  }
  return 0;
}
console.log(rightmostRound([1, 20, 35, 40, 55])); // 4
console.log(rightmostRound([1, 2, 3]));           // 0
