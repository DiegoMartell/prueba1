const hoy = new Date();
const navidad = new Date(hoy.getFullYear(), 11, 25);
if (hoy > navidad) navidad.setFullYear(navidad.getFullYear() + 1);
const dias = Math.ceil((navidad - hoy) / (1000 * 60 * 60 * 24));
console.log(`${dias} días hasta Navidad`);