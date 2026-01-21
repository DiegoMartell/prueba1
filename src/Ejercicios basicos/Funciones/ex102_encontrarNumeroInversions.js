// Ejercicio 102
// Encontrar el número de inversions de un dado arreglo de enteros.  Two elements a[i] y a[j] form an inversion if a[i] > a[j] y i < j.

function contarInversions(arr) {
  let contar = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) contar++;
    }
  }
  return contar;
}
console.log(contarInversions([0, 3, 2, 5, 9])); // 1
