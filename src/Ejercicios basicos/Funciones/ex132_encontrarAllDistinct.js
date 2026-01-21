// Ejercicio 132
// Encontrar all distinct primo factors de un dado entero.

function primoFactores(n) {
  const factores = [];
  let divisor = 2;
  while (n > 1) {
    if (n % divisor === 0) {
      if (!factores.includes(divisor)) factores.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }
  return factores;
}
console.log(primoFactores(45)); // [3, 5]
