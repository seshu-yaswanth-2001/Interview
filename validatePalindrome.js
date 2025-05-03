/*
 * Write a function that determines whether a given string is a valid palindrome.
 * A palindrome is a word, phrse or sequence that reads the same backward as forward.
 * Ignore cases and all non-alphanumeric Characters
 *
 * Input: A single String
 * Return true if the string is a valid palindrome, false otherwise
 */

/**
 *
 * Approach:
 * 1) Input should only accept strings and numeric: use regex and replace extra chars like "space, :, - etc"
 * 2) we need to loop string and we need to push to new array with the reverse string for that:
 *      a)  we need to use for loop - intial point at length of an array -1
 *      b) condition: i > 0; i--
 *      c) while true should push to an str: str2 += str[i]
 * 3) now check arr2 with regex validated string
 * 4) if true return true else false
 * 5) should not occur error in lower or upper case
 *
 */

const validatePalindrome = (str) => {
  const replaced = str.replace(/[^a-zA-Z0-9]/g, "");
  let str2 = "";
  for (let i = replaced.length - 1; i >= 0; i--) {
    str2 += replaced[i];
  }
  if (replaced.toLowerCase() === str2.toLowerCase()) {
    console.log("True from validate palindrome");
  } else {
    console.log("False validate palindrome");
  }
};
validatePalindrome("a1a");
validatePalindrome("!!!@@@###");
validatePalindrome("1234");
validatePalindrome("A man, a plan, a canal: Panama");
validatePalindrome("race a car");

console.log(" ");

// second Approach
function validate(str) {
  const replaced = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log(
    replaced === replaced.split("").reverse().join("")
      ? "True from validate"
      : "False from validate"
  );
}
validate("a1a");
validate("!!!@@@###");
validate("1234");
validate("A man, a plan, a canal: Panama");
validate("race a car");
