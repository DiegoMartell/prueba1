// Ejercicio 39
// Calcular el suma de dos dado enteros.  If el suma es en el range 50..80 return 65 otherwise return 80.

function sumrange50_80(x, y) {
  const suma = x + y;
  return suma >= 50 && suma <= 80 ? 65 : 80;
}
console.log(sumrange50_80(30, 20)); // 65
console.log(sumrange50_80(40, 50)); // 80
