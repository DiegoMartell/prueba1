// Ejercicio 104
// Encontrar dos elements de an arreglo such that their absolute diferencia es not larger than un dado entero n but as close as possible to n.

function closestPair(arr, n) {
  let bestDiff = -1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff <= n && diff > bestDiff) {
        bestDiff = diff;
        result = [arr[i], arr[j]];
      }
    }
  }
  return result;
}
console.log(closestPair([1, 3, 5, 11, 12], 4)); // [11, 12]
