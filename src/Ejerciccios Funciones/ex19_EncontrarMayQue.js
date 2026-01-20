// Devuelve elementos mayores que un número
function mayoresQue(arr, num) {
  return arr.filter(x => x > num);
}
console.log(mayoresQue([1,6,3,9,2], 4)); // [6,9]
