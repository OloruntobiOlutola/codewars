function isPangram(string) {
  let array = [
    ...new Set(
      string
        .toLowerCase()
        .split("")
        .filter((item) => /[a-z]/i.test(item) === true)
    ),
  ];
  if (array.length === 26) return true;
  else return false;
}
