// Búsqueda binaria en un arreglo ordenado
function busquedaBinaria(arr, valor) {
  let inicio = 0, fin = arr.length - 1;
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    if (arr[medio] === valor) return medio;
    if (arr[medio] < valor) inicio = medio + 1;
    else fin = medio - 1;
  }
  return -1;
}

console.log(busquedaBinaria([1,2,3,4,5], 4)); // 3
