// Variable con nombre definido por usuario
var nombre = prompt("Nombre de variable:");
window[nombre] = "valor";
console.log(nombre, "=", window[nombre]);
