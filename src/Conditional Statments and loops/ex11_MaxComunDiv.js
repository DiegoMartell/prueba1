// MCD de dos números
var a = 2154, b = 458;

while (b !== 0) {
  var temp = b;
  b = a % b;
  a = temp;
}
console.log("Máximo común divisor es:", a);
