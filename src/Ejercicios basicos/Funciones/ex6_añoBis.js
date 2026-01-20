function esBisiesto(año) {
  return (año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0);
}
año= 2028; 

if (esBisiesto(año)) {
    console.log("El año " + año + " es bisiesto.");
  } else {
    console.log("El año " + año + " no es bisiesto.");
  }

