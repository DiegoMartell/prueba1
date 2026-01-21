// Ejercicio 67
// Eliminar el primero y último caracteres de un dado cadena if el primero or último carácter es 'P'.

function eliminarPrimeroLastP(str) {
  if (str.length >= 1 && str[0] === 'P') str = str.slice(1);
  if (str.length >= 1 && str[str.length - 1] === 'P') str = str.slice(0, -1);
  return str;
}
console.log(eliminarPrimeroLastP('PythonP')); // 'ython'
console.log(eliminarPrimeroLastP('PJavaP'));  // 'Java'
