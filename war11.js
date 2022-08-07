function persist(num) {
  let count = 0;
  while (String(num).split("").length > 1) {
    let numArr = String(num).split("");
    let num2 = 1;
    for (let i = 0; i < numArr.length; i++) {
      num2 *= parseInt(numArr[i]);
    }
    count++;
    num = num2;
  }
  return count;
}

persist(4);
