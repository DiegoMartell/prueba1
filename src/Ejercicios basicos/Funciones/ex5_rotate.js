function rotarString() {
  let str = 'w3resource';
  for (let i = 0; i < str.length; i++) {
    str = str[str.length - 1] + str.substring(0, str.length - 1);
    console.log(str);
    }
}
console.log("Rotaciones de la cadena 'w3resource':");
rotarString();