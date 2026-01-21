// Ejercicio 110
// Encontrar el número de par values en sequence antes de el primero occurrence de un dado número.

function contarEvenBefore(arr, num) {
  let contar = 0;
  for (let value of arr) {
    if (value === num) break;
    if (value % 2 === 0) contar++;
  }
  return contar;
}
console.log(contarEvenBefore([1, 4, 2, 6, 3, 8], 3)); // 3 (4,2,6)
