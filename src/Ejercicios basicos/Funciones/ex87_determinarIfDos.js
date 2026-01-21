// Ejercicio 87
// Determinar if dos arrays de enteros de el same length son similar.  El arrays

// will be similar if one arreglo can be obtained from another by swapping at most

// one pair de elements.

function areSimilar(a, b) {
  if (a.length !== b.length) return false;
  const diff = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff.push(i);
  }
  if (diff.length === 0) return true;
  if (diff.length === 2) {
    const [i, j] = diff;
    return a[i] === b[j] && a[j] === b[i];
  }
  return false;
}
console.log(areSimilar([1, 2, 3], [1, 3, 2])); // true
console.log(areSimilar([1, 2, 3], [1, 2, 3])); // true
console.log(areSimilar([1, 2, 3], [3, 2, 1])); // false
