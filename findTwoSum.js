/* Given a list of numbers, return whether any two sums to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */
// input arr of num, num
// output boolean
// time O(n^2)
// space O(1)
function findTwoSum(arr, k) {
  // check if num is less than k
  // call isEqual
  while (arr[0] && arr.length > 1) {
    if (arr[0] < k) {
      for (let j = 1; j < arr.length; j++) {
        if (isEqual(arr[0], arr[j], k)) {
          return true;
        }
      }
    }
    arr.shift();
  }
  return false;
}

function isEqual(num1, num2, k) {
  return num1 + num2 === k;
}

console.log(findTwoSum([10, 14, 3, 6], 17));
