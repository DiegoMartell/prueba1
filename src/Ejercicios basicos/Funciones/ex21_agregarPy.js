// Agrega 'Py' si no empieza con ello
function addPy(str){
  return str.startsWith("Py") ? str : "Py"+str;
}
console.log(addPy("thon"));
