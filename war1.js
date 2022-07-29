function descendingOrder(n) {
  let newNum = 0;
  let myArr = String(n)
    .split("")
    .map((num) => {
      return Number(num);
    })
    .sort();
  for (let i = 0; i <= myArr.length - 1; i++) {
    newNum += myArr[i] * 10 ** i;
  }
  return newNum;
}
