// Ejercicio 10: Demostración de try-catch-finally para manejo de errores y limpieza
function dividirConFinally(x, y) {
  try {
    // Verificar que ambos parámetros sean números
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError('Argumentos inválidos. Ambos deben ser números.');
    }
    // Comprobar si el divisor es cero
    if (y === 0) {
      throw new Error('División no permitida. El divisor no puede ser cero.');
    }
    // Realizar la división y mostrar el resultado
    const resultado = x / y;
    console.log('Resultado:', resultado);
  } catch (error) {
    // Manejar cualquier error lanzado en el bloque try
    console.log('Se atrapó un error:', error.message);
  } finally {
    // Código que se ejecuta siempre, haya o no error
    console.log('Bloque finally ejecutado para limpieza.');
  }
}

// Ejemplos de uso
dividirConFinally(10, 2);   // División válida
dividirConFinally(10, 0);   // Divisor cero
dividirConFinally(10, '2'); // Argumento no numérico
