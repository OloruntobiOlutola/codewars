function arrayDiff(a, b) {
  if (a.length === 0) return a;
  return a.filter(item => b.includes(item) === false)
}

let value1 = arrayDiff([1, 2, 2, 2, 3], [2]);
let value2 = arrayDiff([], [1]);

console.log(value1);
console.log(value2);