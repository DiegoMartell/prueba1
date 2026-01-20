// Intercambia primera y última letra
function swapFL(str)  {
  if (str.length <= 1)
  {
    return str;
  }
  mid_char = str.substring(1, str.length - 1);
  return (str.charAt(str.length - 1)) + mid_char + str.charAt(0);
}
console.log(swapFL("hola"));
