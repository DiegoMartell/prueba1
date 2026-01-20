// Remueve carácter en posición dada
function removeAt(str,pos){
  return str.slice(0,pos)+str.slice(pos+1);
}
console.log(removeAt("hola",2));
