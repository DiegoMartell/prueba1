// Ejercicio 115
// Comprobar si un matriz es un diagonal matriz.  Un diagonal matriz has zeros outside its main diagonal.

function isDiagonal(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i !== j && matriz[i][j] !== 0) return false;
    }
  }
  return true;
}
console.log(isDiagonal([[1, 0, 0], [0, 2, 0], [0, 0, 3]])); // true
console.log(isDiagonal([[1, 0, 0], [0, 2, 3], [0, 0, 3]])); // false
