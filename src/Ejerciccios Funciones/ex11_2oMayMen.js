function secondLowHigh(arr) {
  let sorted = [...new Set(arr)].sort((a,b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}

console.log(secondLowHigh([1,2,3,4,5])); // [2,4]
