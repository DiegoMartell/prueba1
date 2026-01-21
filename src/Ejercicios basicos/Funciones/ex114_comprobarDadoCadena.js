// Ejercicio 114
// Comprobar si un dado cadena represents un correct sentence.  Un cadena es considered un correct sentence

// if it starts with un capital letter y ends with un full stop ('.').

function isCorrectSentence(str) {
  return /^[A-Z].*\.$/.test(str);
}
console.log(isCorrectSentence('This is a sentence.')); // true
console.log(isCorrectSentence('this is a sentence.')); // false
