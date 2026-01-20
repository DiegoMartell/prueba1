// Genera un ID aleatorio de longitud dada
function generarID(longitud) {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < longitud; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
console.log(generarID(8));
