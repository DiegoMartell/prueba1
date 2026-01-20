function accessArray(arr, index) {
  try {
    let val = arr[index];
    if (val === undefined) throw new RangeError("Índice fuera de rango");
    console.log(val);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

accessArray([10,20,30], 1); // 20
accessArray([10,20,30], 5); // Error
