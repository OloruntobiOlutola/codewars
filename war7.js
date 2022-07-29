function deleteNth(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let index = [];
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
        if (count > n) {
          index.unshift(j);
        }
      }
    }
    index.forEach((element) => {
      arr.splice(element, 1);
    });
  }

  return arr;
}
