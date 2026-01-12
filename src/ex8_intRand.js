let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let intento = 5; // número de prueba

if (intento === numeroAleatorio) {
  console.log("Buen trabajo");
} else {
  console.log("No coincidido");
}

console.log("Número ingresado:", intento);
console.log("Número aleatorio:", numeroAleatorio);
