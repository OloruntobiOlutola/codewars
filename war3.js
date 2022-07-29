function resolve(input) {
  let output = [];
  input.forEach((element) => {
    if (element[0] >= 55 && element[1] > 7 && element[1] <= 26) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  });
  return output;
}
