// Primeros 5 números felices
function isHappy(n) {
  var seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    var next = 0;
    while (n > 0) {
      var digit = n % 10;
      next += digit * digit;
      n = Math.floor(n / 10);
    }
    n = next;
  }
  return n === 1;
}

var count = 0, num = 1;
while (count < 5) {
  if (isHappy(num)) {
    console.log(num);
    count++;
  }
  num++;
}
