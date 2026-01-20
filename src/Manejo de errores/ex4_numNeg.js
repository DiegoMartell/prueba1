function checkPositive(num) {
  if (num < 0) {
    throw new Error("Número negativo no permitido");
  }
  return num;
}

try {
  console.log(checkPositive(5));  // 5
  console.log(checkPositive(-2)); // lanza error
} catch (e) {
  console.log("Error:", e.message);
}
