function divide(x, y) {
  try {
    if (typeof x !== "number" || typeof y !== "number")
      throw new TypeError("Argumentos no son números");

    if (y === 0) throw new Error("No se puede dividir por cero");

    console.log(x / y);
  } catch (e) {
    if (e instanceof TypeError) {
      console.log("TypeError:", e.message);
    } else {
      console.log("Error:", e.message);
    }
  }
}

divide(10, "a"); // TypeError
divide(10, 2);   // 5
divide(10, 0);   // Error
