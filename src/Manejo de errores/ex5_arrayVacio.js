function validateArrayNotEmpty(arr) {
  if (arr.length === 0) throw new Error("El arreglo está vacío");
}

try {
  validateArrayNotEmpty([1,2]);
  validateArrayNotEmpty([]); // error
} catch (e) {
  console.log("Error:", e.message);
}
