const hoy = new Date();
const mm = String(hoy.getMonth() + 1).padStart(2, '0');
const dd = String(hoy.getDate()).padStart(2, '0');
const yyyy = hoy.getFullYear();

console.log(`${mm}-${dd}-${yyyy}`);
console.log(`${mm}/${dd}/${yyyy}`);
console.log(`${dd}-${mm}-${yyyy}`);
console.log(`${dd}/${mm}/${yyyy}`);