function validateString(str) {
  if (str === "") throw new Error("La cadena está vacía");
}

try {
  validateString("Hola");
  validateString(""); // error
} catch (e) {
  console.log("Error:", e.message);
}
