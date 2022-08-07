// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  num = num.toString().split("").reverse();
  let str = "";
  //   num.forEach((element) => {
  //     if (parseInt(element) > 0) str = str + `${element} + `;
  //   });
  let count = num.length;
  while (count > 1) {
    if (parseInt(num[count - 1]) > 0) {
      str += `${num[count - 1]} + `;
    }
    count--;
  }

  console.log(str);
}
expandedForm(70304);
