// Ejercicio 117
// Comprobar si un dado matriz es an identity matriz.  An identity matriz has ones on el main diagonal y zeros elsewhere.

function isIdentity(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (i === j && matriz[i][j] !== 1) return false;
      if (i !== j && matriz[i][j] !== 0) return false;
    }
  }
  return true;
}
console.log(isIdentity([[1, 0, 0], [0, 1, 0], [0, 0, 1]])); // true
console.log(isIdentity([[1, 0, 0], [0, 1, 0], [1, 0, 1]])); // false
