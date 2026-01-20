// Toma los últimos 3 caracteres y los coloca delante y detrás

function ultimosTres(str) {
  if (str.length < 3) return str;

  const ult = str.slice(-3);
  return ult + str + ult;
}

console.log(ultimosTres("javascript"));