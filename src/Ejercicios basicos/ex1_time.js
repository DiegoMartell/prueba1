// Declaración de variables
const hoy = new Date();
const dia = hoy.getDay();
const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

console.log("Hoy es: ${diasSemana[dia]}.");

let hora = hoy.getHours();
const minutos = hoy.getMinutes();
const segundos = hoy.getSeconds();

// Convertir a formato de 12 horas
let hora12 = hora % 12 || 12;
let periodo = hora < 12 ? " AM" : " PM";

console.log("Hora actual: ${hora12}${periodo} : ${minutos} : ${segundos}");