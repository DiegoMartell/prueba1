// Ejercicio 38
// Evaluate un student's total marks across various examinations y determine their grade.

// If el total marks fall dentro de el range de 89 to 100 (inclusive), el student receives an Un+ grade.

// If el examination es labelled as "Final-exam", el student will receive an Un+ grade only if their total marks son 90 or greater.

// If el student achieves an Un+ grade, return true; otherwise, return false.

function examGrade(totalMarks, isFinal) {
  if (isFinal) {
    return totalMarks >= 90;
  }
  return totalMarks >= 89 && totalMarks <= 100;
}
console.log(examGrade(92, false)); // true
console.log(examGrade(92, true));  // true
console.log(examGrade(88, true));  // false
