// Ejercicio 94
// Encontrar el número appearing most frequently en un dado arreglo de enteros.

function mostFrequent(arr) {
  const freq = {};
  let maximoContar = 0;
  let maximoNum;
  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] > maximoContar) {
      maximoContar = freq[num];
      maximoNum = num;
    }
  }
  return maximoNum;
}
console.log(mostFrequent([1, 2, 3, 1, 2, 1])); // 1
