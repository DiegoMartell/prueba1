function factors(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
}

console.log(factors(12)); // [1,2,3,4,6,12]