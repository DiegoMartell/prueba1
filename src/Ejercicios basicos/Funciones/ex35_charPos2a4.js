// Comprueba si un carácter está entre la posición 2 y 4

function checkChar(str, ch) {
   ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if ((str.charAt(i) == ch) && (i >= 1 && i <= 3))
    {
        ctr=1;
        break;
    }
   }
   if (ctr==1) return true;
   return false;
}

console.log(checkChar("python", "y"));
console.log(checkChar("JavaScript", "a"));
console.log(checkChar("Console", "C"));