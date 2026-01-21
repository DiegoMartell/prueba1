// Ejercicio 100
// Comprobar if there es at least one element en dos dado sorted arrays de enteros.

function haveCommon(arr1, arr2) {
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) return true;
    if (arr1[i] < arr2[j]) i++; else j++;
  }
  return false;
}
console.log(haveCommon([1, 2, 3], [3, 4, 5])); // true
console.log(haveCommon([1, 2, 3], [4, 5, 6])); // false
