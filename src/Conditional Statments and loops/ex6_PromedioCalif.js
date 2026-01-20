// Calcular promedio y grado
var students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68]
];

var sum = 0;
for (var i = 0; i < students.length; i++) {
  sum += students[i][1];
}
var avg = sum / students.length;

console.log("Promedio:", avg);

if (avg < 60) console.log("F");
else if (avg < 70) console.log("D");
else if (avg < 80) console.log("C");
else if (avg < 90) console.log("B");
else console.log("A");
