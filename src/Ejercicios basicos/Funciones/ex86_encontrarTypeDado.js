// Ejercicio 86
// Encontrar el type de un dado angle.

// Acute angle: 0 < angle < 90

// Right angle: angle = 90

// Obtuse angle: 90 < angle < 180

// Straight angle: angle = 180

function angleType(angle) {
  if (angle < 90) return 'Acute angle';
  if (angle === 90) return 'Right angle';
  if (angle < 180) return 'Obtuse angle';
  return 'Straight angle';
}
console.log(angleType(45));  // 'Acute angle'
console.log(angleType(90));  // 'Right angle'
console.log(angleType(135)); // 'Obtuse angle'
console.log(angleType(180)); // 'Straight angle'
