function validaEnteros(number) 
{
  if (!Number.isInteger(number)) 
  {
    throw new Error('Numero invalido ingresa un numero entero.');
  }
  console.log('El número :', number,' es valido');
}

// Example usage:
try {
  validaEnteros(12); // Valid integer
  validaEnteros(2.12); 
} catch (error) {
  console.log('Error personalizado:', error.message);
}