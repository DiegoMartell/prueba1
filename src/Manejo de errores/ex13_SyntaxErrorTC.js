
function parsearJSON(cadenaJSON) {
  try {
    // Intentar convertir la cadena JSON a un objeto JavaScript
    const datos = JSON.parse(cadenaJSON);
    console.log('Datos analizados:', datos);
  } catch (error) {
    // Verificar si el error es de tipo SyntaxError
    if (error instanceof SyntaxError) {
      console.log('SyntaxError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

parsearJSON('{"nombre": "Juan", "edad": 30}');
parsearJSON('{"nombre": "Juan", "edad": 30,}');
