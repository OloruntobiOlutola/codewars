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

let list = "The quick brown jumps over the lazy dog 1234 *** fox";

console.log(isPangram(list));
