for (let año = 2014; año <= 2050; año++) {
  const fecha = new Date(año, 0, 1);
  if (fecha.getDay() === 0) {
    console.log(`1° de enero es domingo en ${año}`);
  }
}