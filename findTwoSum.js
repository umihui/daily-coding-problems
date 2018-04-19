/* Given a list of numbers, return whether any two sums to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
 */
// input arr of num, num
// output boolean
// time O(n)
// space O(2)?
function findTwoSum(arr, k) {
  // check if num is less than k
  // call isEqual
  var cache = {};
  for (let num of arr) {
    if (cache[num]) {
      return true;
    } else {
      var rest = k - num;
      cache[rest] = true;
    }
  }
  return false;
}

console.log(findTwoSum([10, 13, 3, 7], 17));
