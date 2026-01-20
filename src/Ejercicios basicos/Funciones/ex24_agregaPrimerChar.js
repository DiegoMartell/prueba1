// Agrega el primer carácter al inicio y al final

function envolver(str) {
  if (str.length === 0) return str;
  return str[0] + str + str[0];
}

console.log(envolver("hola"));
