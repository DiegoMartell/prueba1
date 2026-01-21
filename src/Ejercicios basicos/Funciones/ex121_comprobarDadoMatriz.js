// Ejercicio 121
// Comprobar si un dado matriz es lower triangular (all entries above el main diagonal son zero).

function isMinusculasTriangular(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = i + 1; j < matriz[i].length; j++) {
      if (matriz[i][j] !== 0) return false;
    }
  }
  return true;
}
console.log(isMinusculasTriangular([[1, 0, 0], [2, 3, 0], [4, 5, 6]])); // true
console.log(isMinusculasTriangular([[1, 1, 0], [2, 3, 0], [4, 5, 6]])); // false
