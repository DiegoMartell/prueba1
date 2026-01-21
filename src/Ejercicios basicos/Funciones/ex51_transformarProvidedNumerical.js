// Ejercicio 51
// Transformar un provided numerical value into hours y minutes.

function horaConvertir(num) {
  const horas = Math.floor(num / 60);
  const minutos = num % 60;
  return horas + ':' + minutos;
}
console.log(horaConvertir(71)); // '1:11'
console.log(horaConvertir(450)); // '7:30'
