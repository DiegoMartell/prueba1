// Entero dentro de 20 de 100 o 400
function rango(n){
  return Math.abs(100-n)<=20 || Math.abs(400-n)<=20;
}
console.log(rango(500));
