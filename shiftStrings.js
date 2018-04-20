/* Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

*/

function shiftStrings(str1, str2) {
  // same length
  if (str1.length !== str2.length) {
    return false;
  }
  var length = str1.length;
  // same letters
  var start = str1.charAt(0);
  var secondStartIndex;
  for (let i = 0; i < length; i++) {
    if (str2.charAt(i) === start) {
      secondStartIndex = i;
      break;
    }
  }
  if (secondStartIndex === undefined) {
    return false;
  }
  // same orders
  var startIndex = 1;
  while (startIndex < length) {
    secondStartIndex++;
    if (secondStartIndex === length) {
      secondStartIndex = 0;
    }
    if (str1.charAt(startIndex) !== str2.charAt(secondStartIndex)) {
      return false;
    }
    startIndex++;
  }

  return true;
}

console.log(shiftStrings("abcd", "acbd"));
