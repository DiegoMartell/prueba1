// Ejercicio 11: Manejo de EvalError al evaluar una expresión con eval
function evaluarExpresion(expresion) {
  try {
    // Evaluar la expresión utilizando eval
    const resultado = eval(expresion);
    console.log('Resultado:', resultado);
  } catch (error) {
    // Verificar si el error es de tipo EvalError
    if (error instanceof EvalError) {
      console.log('EvalError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}

// Ejemplos de uso
evaluarExpresion('30 + 30'); // Expresión válida
evaluarExpresion('3 +');     // Expresión inválida
