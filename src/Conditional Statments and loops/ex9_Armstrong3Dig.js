// Armstrong de 3 dígitos
for (var i = 100; i < 1000; i++) {
  var digits = i.toString().split("");
  var sum = 0;
  for (var d of digits) sum += Math.pow(parseInt(d), 3);

  if (sum === i) console.log(i);
}
