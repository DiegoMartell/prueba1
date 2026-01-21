// Ejercicio 150
// Swap pairs de adjacent digits de un dado entero de par length.

function swapAdjacentPairs(num) {
  const s = num.toString();
  if (s.length % 2 !== 0) return null;
  let res = '';
  for (let i = 0; i < s.length; i += 2) {
    res += s[i + 1] + s[i];
  }
  return parseInt(res, 10);
}
console.log(swapAdjacentPairs(1234)); // 2143
console.log(swapAdjacentPairs(123456)); // 214365
