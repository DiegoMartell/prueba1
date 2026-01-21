// Devuelve false si empieza o termina con 'Script'

function validaScript(str) {
  return !(str.startsWith("Script") || str.endsWith("Script"));
}

console.log(validaScript("JavaScript"));