// Ejercicio 85
// Dividir un dado arreglo de positivo enteros into dos parts: alternate elements go into each part.

// Calcular el suma de dos parts y store it en an arreglo de size dos.

function dividirAlternatingSuma(arr) {
  let suma1 = 0, sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) suma1 += arr[i]; else sum2 += arr[i];
  }
  return [suma1, sum2];
}
console.log(dividirAlternatingSuma([1, 2, 3, 4, 5])); // [9, 6]
