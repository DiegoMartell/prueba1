// Ordenar tres números de mayor a menor
var a = 0, b = -1, c = 4;
var arr = [a, b, c];

arr.sort(function(x, y) {
  return y - x;
});

console.log(arr.join(", "));
