// Ejercicio 12: Manejo de ReferenceError al acceder a una variable no definida
function accederVariable() {
  try {
    // Intentar acceder a una variable que no está definida
    console.log(variableIndefinida);
  } catch (error) {
    // Verificar si el error es de tipo ReferenceError
    if (error instanceof ReferenceError) {
      console.log('ReferenceError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

// Ejemplo de uso
accederVariable();
