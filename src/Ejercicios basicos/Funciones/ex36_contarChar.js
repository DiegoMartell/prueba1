// Cuenta cuántas veces aparece un carácter

function contar(str, ch) {
  let count = 0;
  for (let c of str) {
    if (c === ch) count++;
  }
  return count;
}

console.log(contar("javascript", "a"));