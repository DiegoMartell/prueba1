console.log("PROGRAMA PARA MANEJAR ERRORES");

// Objeto para usar en el ejemplo
let persona = {
    nombre: "Carlos"
};

try {
    // Intentamos acceder a una propiedad que no existe
    console.log("Intentando acceder a la propiedad 'edad'...");
    console.log(persona.edad.toString()); // Esto causará error
} catch (error) {
    console.log("¡Error capturado!");
    console.log("Tipo: " + error.name);
    console.log("Mensaje: " + error.message);
}

console.log("El programa continúa normalmente.");