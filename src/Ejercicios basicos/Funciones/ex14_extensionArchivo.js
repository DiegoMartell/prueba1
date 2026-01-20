// Obtiene extensión de un nombre de archivo
function extArchivo(nombre) {
  return nombre.split('.').pop();
}
console.log(extArchivo("archivo.txt"));
