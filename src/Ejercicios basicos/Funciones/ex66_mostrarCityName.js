// Ejercicio 66
// Mostrar el city name if el cadena begins with "Los" or "New" otherwise return blank.

function cityName(str) {
  if (str.length >= 3 && (str.slice(0, 3) === 'Los' || str.slice(0, 3) === 'New')) {
    return str;
  }
  return '';
}
console.log(cityName('New York')); // 'New York'
console.log(cityName('Los Angeles')); // 'Los Angeles'
console.log(cityName('London')); // ''
