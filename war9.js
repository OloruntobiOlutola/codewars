/*
 * Author: Olutola Oloruntobi Paul
 * Date: 31/07/2022
 */

// Write a function that takes in a string of one or more words, and returns
// the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
// spinWords( "This is a test") => returns "This is a test"
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[i].length > 4) str[i] = str[i].split("").reverse().join("");
  }
  return str.join(" ");
}

//  /[a-z  A-Z  0-9]+[@][a-z]+[.][a-z]{2,3}\b/g email