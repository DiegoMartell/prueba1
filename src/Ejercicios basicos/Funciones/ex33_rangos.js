// Ambos números deben estar en 40–60 o 70–100

function mismoRango(a, b) {
  return (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  );
}

console.log(mismoRango(45, 55));