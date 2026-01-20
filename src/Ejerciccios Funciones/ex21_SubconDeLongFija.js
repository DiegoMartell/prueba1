// Genera combinaciones de longitud fija
function combinacionesFijas(arr, k) {
  let result = [];
  function comb(temp, start) {
    if (temp.length === k) result.push([...temp]);
    else {
      for (let i = start; i < arr.length; i++) {
        temp.push(arr[i]);
        comb(temp, i + 1);
        temp.pop();
      }
    }
  }
  comb([], 0);
  return result;
}
console.log(combinacionesFijas([1,2,3], 2));
