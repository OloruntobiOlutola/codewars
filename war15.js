// function josephus(items, k) {
//   var result = [],
//     index = 0;
//   while (items.length > 0) {
//     index = (index + k - 1) % items.length;
//     result = result.concat(items.splice(index, 1));
//   }
//   return result;
// }

// console.log(josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

function josephus(n, k) {
  let index = 0;
  let items = [];
  for (let i = 0; i < n; i++) {
    items.push(i + 1);
  }
  while (items.length > 1) {
    index = (index + k - 1) % items.length;
    items.splice(index, 1);
  }
  return items.pop();
}

console.log(josephus(9, 2));
