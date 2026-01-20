// Encontrar el mayor de 5 números
var nums = [-5, -2, -6, 0, -1];
var max = nums[0];

for (var i = 1; i < nums.length; i++) {
  if (nums[i] > max) max = nums[i];
}

console.log("Mayor es:", max);
