let input = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

function resolve(input) {
  let output = [];
  input.forEach((element) => {
    if (element[0] >= 55 && element[1] > 7 && element[1] <= 26) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  });
  console.log(output);
}

resolve(input);
