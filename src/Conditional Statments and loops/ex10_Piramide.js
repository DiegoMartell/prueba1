// Imprimir patrón de pirámide
var levels = 10;
for (var i = 1; i <= levels; i++) {
  var line = "";
  for (var j = 0; j < i; j++) {
    line += "* ";
  }
  console.log(line);
}
