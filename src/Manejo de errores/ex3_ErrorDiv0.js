function dividir(num1, num2) {
    if (num2 === 0) {
        throw new Error("Error: No se puede dividir por cero");
    }   
    return num1 / num2;
}

console.log("Probando la función dividir:");
try {
    // Prueba 1: División normal
    console.log("10 ÷ 2 = " + dividir(10, 2));
    
    // Prueba 2: Esto causará error
    console.log("10 ÷ 0 = " + dividir(10, 0));
} catch (error) {
    console.log("Mensaje de error: " + error.message);
}
console.log("Fin del programa");