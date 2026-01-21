// Ejercicio 141
// Encontrar el número de elements en both arrays (intersection size).

function contarCommon(arr1, arr2) {
  const set = new Set(arr1);
  let contar = 0;
  for (let el of arr2) {
    if (set.has(el)) contar++;
  }
  return contar;
}
console.log(contarCommon([1, 2, 3], [3, 4, 5])); // 1
