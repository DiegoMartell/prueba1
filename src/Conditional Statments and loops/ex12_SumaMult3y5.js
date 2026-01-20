// Suma de múltiplos de 3 y 5 menos de 1000
var sum = 0;
for (var i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}
console.log("Suma:", sum);
