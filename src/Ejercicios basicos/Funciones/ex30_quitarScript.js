// Elimina 'Script' si aparece desde la posición 4

function quitarScript(str) {
  return str.substring(4, 10) === "Script"
    ? str.replace("Script", "")
    : str;
}

console.log(quitarScript("JavaScript"));
