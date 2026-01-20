// Función para convertir Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Función para convertir Celsius ingresado por el usuario
function convertirCelsius() {
    const celsiusInput = document.getElementById('celsius');
    const resultado = document.getElementById('resultadoCelsius');
    
    const celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
        resultado.textContent = "Por favor, ingresa un número válido";
        resultado.style.color = "red";
        return;
    }
    
    const fahrenheit = celsiusAFahrenheit(celsius);
    resultado.textContent = `${celsius}°C = ${fahrenheit}°F`;
    resultado.style.color = "green";
}

// Función para convertir Fahrenheit ingresado por el usuario
function convertirFahrenheit() {
    const fahrenheitInput = document.getElementById('fahrenheit');
    const resultado = document.getElementById('resultadoFahrenheit');
    
    const fahrenheit = parseFloat(fahrenheitInput.value);
    
    if (isNaN(fahrenheit)) {
        resultado.textContent = "Por favor, ingresa un número válido";
        resultado.style.color = "red";
        return;
    }
    
    const celsius = fahrenheitACelsius(fahrenheit);
    resultado.textContent = `${fahrenheit}°F = ${celsius}°C`;
    resultado.style.color = "green";
}