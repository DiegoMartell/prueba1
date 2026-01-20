// Encuentra el nombre de país más largo
function paisMasLargo(paises) {
  let largoMax = "";
  for (let p of paises) {
    if (p.length > largoMax.length) largoMax = p;
  }
  return largoMax;
}
console.log(paisMasLargo(["Australia", "Alemania", "Estados Unidos de América"]));

