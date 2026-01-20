// Pasar una función como parámetro
function ejecutar(fn) {
  fn();
}
function saludar() {
  console.log("Hola!");
}
ejecutar(saludar);
