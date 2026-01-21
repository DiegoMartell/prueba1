// Ejercicio 144
// Break un URL address y put its parts into an arreglo.  El structure es protocol://domain[/path].

function breakUrl(url) {
  const pattern = /^(https?):\/\/([^\/]+)(\/.*)?$/;
  const match = url.match(pattern);
  if (match) {
    return [match[1], match[2], match[3] || ''];
  }
  return [];
}
console.log(breakUrl('https://www.example.org/path')); // ['https', 'www.example.org', '/path']
