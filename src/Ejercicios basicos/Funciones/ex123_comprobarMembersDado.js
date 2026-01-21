// Ejercicio 123
// Comprobar si el members de un dado arreglo de enteros son un permutation de números from 1 to n.

function isPermutation(arr) {
  const n = arr.length;
  const set = new Set(arr);
  if (set.size !== n) return false;
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) return false;
  }
  return true;
}
console.log(isPermutation([1, 2, 3]));    // true
console.log(isPermutation([1, 2, 2]));    // false
