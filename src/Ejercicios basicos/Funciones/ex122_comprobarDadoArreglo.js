// Ejercicio 122
// Comprobar si un dado arreglo de enteros represents un strictly increasing or strictly decreasing sequence.

function isStrictlyIncOrDec(arr) {
  let inc = true;
  let dec = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) inc = false;
    if (arr[i] >= arr[i - 1]) dec = false;
  }
  return inc || dec;
}
console.log(isStrictlyIncOrDec([1, 2, 3, 4]));    // true (increasing)
console.log(isStrictlyIncOrDec([4, 3, 2, 1]));    // true (decreasing)
console.log(isStrictlyIncOrDec([1, 2, 2, 3]));    // false
