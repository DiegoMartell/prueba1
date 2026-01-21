// Ejercicio 131
// Crear an arreglo de prefix sums de el dado arreglo.  Each element en el result

// es el suma de all elements up to that index.

function prefijoSums(arr) {
  let suma = 0;
  return arr.map(x => suma += x);
}
console.log(prefijoSums([1, 2, 3, 4])); // [1, 3, 6, 10]
